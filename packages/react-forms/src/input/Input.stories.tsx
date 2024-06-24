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

export const Text: Story = {
  args: {
    label: 'User Name',
    name: 'username',
    type: 'text'
  }
};

export const Number: Story = {
  args: {
    label: 'Number',
    name: 'number',
    type: 'number'
  }
};

export const Password: Story = {
  args: {
    label: 'Password',
    name: 'password',
    type: 'password'
  }
};

export const Email: Story = {
  args: {
    label: 'E-Mail',
    name: 'email',
    type: 'email'
  }
};

export const File: Story = {
  args: {
    label: 'File',
    name: 'file',
    type: 'file'
  }
};

export const Checkbox: Story = {
  args: {
    label: 'I aggreed!',
    name: 'checkbox',
    type: 'checkbox'
  }
};

export const Date: Story = {
  args: {
    label: 'Reservation',
    name: 'date',
    type: 'date'
  }
};

export const DateTimeLocal: Story = {
  args: {
    label: 'Reservation',
    name: 'datetime-local',
    type: 'datetime-local'
  }
};

export const Month: Story = {
  args: {
    label: 'Month',
    name: 'month',
    type: 'month'
  }
};

export const Week: Story = {
  args: {
    label: 'Week',
    name: 'week',
    type: 'week'
  }
};

export const Time: Story = {
  args: {
    label: 'Time',
    name: 'time',
    type: 'time'
  }
};

export const Color: Story = {
  args: {
    label: 'Favorite Color',
    name: 'colorpicker',
    type: 'color'
  }
};

export const Range: Story = {
  args: {
    label: 'Range',
    name: 'range',
    type: 'range'
  }
};

export const Search: Story = {
  args: {
    label: 'Search',
    name: 'search',
    type: 'search'
  }
};

export const Tel: Story = {
  args: {
    label: 'Tel',
    name: 'tel',
    type: 'tel'
  }
};

export const Url: Story = {
  args: {
    label: 'Personal Website',
    name: 'url',
    type: 'url'
  }
};
