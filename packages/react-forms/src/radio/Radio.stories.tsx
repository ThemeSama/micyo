import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Radio from './Radio';

const meta = {
  title: 'react-forms/Radio',
  component: Radio,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RadioList: Story = {
  args: {
    name: 'hobbies',
    label: 'Hobbies',
    list: [
      {
        label: 'Soccer',
        value: 'soccer'
      },
      {
        label: 'Games',
        value: 'games'
      }
    ]
  }
};
