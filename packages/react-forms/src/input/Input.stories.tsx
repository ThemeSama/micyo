import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Input, { IInput } from './Input';

const meta = {
  title: 'react-forms/Input',
  component: Input,
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
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'User Name',
    name: 'username',
    type: 'text'
  }
};

export const Password: Story = {
  args: {
    label: 'Password',
    name: 'password',
    type: 'password'
  }
};
