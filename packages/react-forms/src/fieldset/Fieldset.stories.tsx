import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Fieldset from './Fieldset';

const meta = {
  title: 'react-forms/Fieldset',
  component: Fieldset,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Fieldset>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FieldsetLegend: Story = {
  args: {
    legend: 'Register Form',
    children: ''
  }
};
