import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Submit from './Submit';

const meta = {
  title: 'react-forms/Submit',
  component: Submit,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Submit>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SubmitButton: Story = {
  args: { label: 'Submit' }
};
