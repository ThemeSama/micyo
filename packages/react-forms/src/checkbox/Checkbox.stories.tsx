import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from './Checkbox';

const meta = {
  title: 'react-forms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckboxList: Story = {
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
