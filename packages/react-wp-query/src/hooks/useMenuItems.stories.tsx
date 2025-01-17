import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { StorybookDecorator } from '../helpers/StorybookDecorator';
import { useMenuItems } from './useMenuItems';

const meta: Meta<typeof useMenuItems> = {
  title: 'react-wp-query/useMenuItems',
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <Story />
      </StorybookDecorator>
    )
  ],
  parameters: {
    layout: 'padded'
  }
};

export default meta;
type Story = StoryObj<typeof useMenuItems>;

export const MenuItems: Story = {
  render: () => {
    const { menuItems } = useMenuItems({});
    return <></>;
  }
};
