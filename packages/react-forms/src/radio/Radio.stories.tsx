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
    name: 'drone',
    label: 'Select a maintenance drone',
    list: [
      {
        label: 'Huey',
        value: 'huey'
      },
      {
        label: 'Dewey',
        value: 'dewey'
      },
      {
        label: 'Louie',
        value: 'louie'
      }
    ]
  }
};
