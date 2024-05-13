import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Can } from './Can';
import { AbilityProvider } from '../context/AbilityProvider';
import { CanProps } from '../types/Ability';

const meta = {
  title: 'react-can/Can',
  component: Can,
  decorators: [
    (Story: StoryObj) => (
      <AbilityProvider list={['READ_POST']} persistent={false}>
        <Story />
      </AbilityProvider>
    )
  ],
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    i: {
      control: 'select',
      options: ['READ_POST', 'DELETE_POST'],
      description: 'Ability name'
    },
    children: {
      control: false
    }
  }
} satisfies Meta<typeof Can>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Access: Story = {
  args: {
    i: 'READ_POST'
  },
  render: (args: CanProps) => (
    <Can {...args}>
      <div>Congratulations, you can read posts!</div>
    </Can>
  )
};

export const Restrict: Story = {
  args: {
    i: 'DELETE_POST'
  },
  render: (args: CanProps) => (
    <Can {...args}>
      <div>Congratulations, you can read posts!</div>
    </Can>
  )
};
