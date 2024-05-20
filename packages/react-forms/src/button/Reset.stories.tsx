import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Reset from './Reset';

const meta = {
  title: 'react-forms/Reset',
  component: Reset,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Reset>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ResetButton: Story = {
  args: { label: 'Reset' }
};
