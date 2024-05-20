import * as React from 'react';
import { AbilityProvider } from '../context/AbilityProvider';
import { Meta, StoryObj } from '@storybook/react';

import useAbility from './useAbility';

const meta: Meta<typeof useAbility> = {
  title: 'react-can/useAbility',
  decorators: [
    (Story) => (
      <AbilityProvider list={['READ_POST']} persistent={false}>
        <Story />
      </AbilityProvider>
    )
  ],
  tags: ['!autodocs'],
  parameters: {
    layout: 'centered'
  }
};

export default meta;
type Story = StoryObj<typeof useAbility>;

interface ISwitchButton {
  label: string;
  checked?: boolean;
  onClick?(checked: boolean): void;
}

const StorySwitch = ({ label, checked, onClick }: ISwitchButton) => {
  return (
    <label className="micyo-story-switch">
      <input type="checkbox" onChange={(e) => onClick(e.target.checked)} checked={checked} />
      <span className="micyo-story-slider round"></span>
      <span>{label}</span>
    </label>
  );
};

export const Hook: Story = {
  render: () => {
    const {
      abilities,
      addAbility,
      addAbilities,
      removeAbility,
      removeAbilities,
      can,
      clearAbilities
    } = useAbility();

    return (
      <>
        <h3>Ability List</h3>
        {abilities.length ? (
          <ul className="micyo-story-ul">
            {abilities.map((ability) => (
              <li key={ability}>{ability}</li>
            ))}
          </ul>
        ) : (
          <p>There is no ability!</p>
        )}
        <h4>Controls</h4>
        <StorySwitch
          label="Read Post"
          checked={can('READ_POST')}
          onClick={(checked) => {
            if (checked) {
              addAbility('READ_POST');
            } else {
              removeAbility('READ_POST');
            }
          }}
        />
        <StorySwitch
          label="Add Post"
          checked={can('ADD_POST')}
          onClick={(checked) => {
            if (checked) {
              addAbility('ADD_POST');
            } else {
              removeAbility('ADD_POST');
            }
          }}
        />
        <StorySwitch
          label="Edit and Delete Post"
          checked={can('EDIT_POST') && can('DELETE_POST')}
          onClick={(checked) => {
            if (checked) {
              addAbilities(['EDIT_POST', 'DELETE_POST']);
            } else {
              removeAbilities(['EDIT_POST', 'DELETE_POST']);
            }
          }}
        />
      </>
    );
  }
};
