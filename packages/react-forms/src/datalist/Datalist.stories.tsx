import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Datalist from './Datalist';

const meta = {
  title: 'react-forms/Datalist',
  component: Datalist,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    type: {
      control: 'select',
      options: [
        'color',
        'date',
        'datetime-local',
        'email',
        'file',
        'hidden',
        'image',
        'month',
        'number',
        'password',
        'range',
        'search',
        'tel',
        'text',
        'time',
        'url',
        'week'
      ]
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof Datalist>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Choose a flavor',
    name: 'flavor',
    type: 'text',
    list: [
      { value: 'Chocolate' },
      { value: 'Coconut' },
      { value: 'Mint' },
      { value: 'Strawberry' },
      { value: 'Vanilla' }
    ]
  }
};
