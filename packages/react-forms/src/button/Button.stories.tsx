import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta = {
  title: 'react-forms/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultButton: Story = {
  args: { label: 'Button', type: 'button' }
};
