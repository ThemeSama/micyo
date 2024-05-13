import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AbilityProvider } from './AbilityProvider';
import { AbilityProviderProps } from '../types/Ability';
import { Can } from '../components/Can';
import { Cannot } from '../components/Cannot';

const meta = {
  title: 'react-can/AbilityProvider',
  component: AbilityProvider,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    list: { control: 'inline-check', options: ['READ_POST', 'DELETE_POST'] },
    children: {
      control: false
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof AbilityProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Provider: Story = {
  args: {
    list: ['READ_POST'],
    persistent: false
  },
  render: (args: AbilityProviderProps) => (
    <AbilityProvider {...args}>
      <ul>
        <Can i="READ_POST">
          <li>
            You <strong>can</strong> read posts.
          </li>
        </Can>
        <Can i="DELETE_POST">
          <li>
            You <strong>can</strong> delete posts.
          </li>
        </Can>
        <Cannot i="READ_POST">
          <li>
            You <strong>can't</strong> read posts.
          </li>
        </Cannot>
        <Cannot i="DELETE_POST">
          <li>
            You <strong>can't</strong> delete posts.
          </li>
        </Cannot>
      </ul>
    </AbilityProvider>
  )
};
