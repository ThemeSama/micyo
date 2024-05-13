import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Cannot } from './Cannot';
import { AbilityProvider } from '../context/AbilityProvider';
import { CanProps } from '../types/Ability';

const meta = {
  title: 'react-can/Cannot',
  component: Cannot,
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
} satisfies Meta<typeof Cannot>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Restrict: Story = {
  args: {
    i: 'DELETE_POST'
  },
  render: (args: CanProps) => (
    <Cannot {...args}>
      <div>You can't delete posts!</div>
    </Cannot>
  )
};

export const Access: Story = {
  args: {
    i: 'READ_POST'
  },
  render: (args: CanProps) => (
    <Cannot {...args}>
      <div>You can't delete posts!</div>
    </Cannot>
  )
};
