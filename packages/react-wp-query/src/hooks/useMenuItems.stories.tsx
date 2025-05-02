import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { StorybookDecorator } from '../helpers/StorybookDecorator';
import { useMenuItems } from './useMenuItems';
import { http, HttpResponse } from 'msw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { ghcolors } from 'react-syntax-highlighter/dist/esm/styles/prism';

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

    return menuItems && menuItems.isLoading ? (
      <>Loading...</>
    ) : (
      <SyntaxHighlighter
        language="json"
        style={ghcolors}
        customStyle={{ border: 'none', padding: 0, margin: 0 }}>
        {JSON.stringify(menuItems?.data, null, 2)}
      </SyntaxHighlighter>
    );
  }
};

MenuItems.parameters = {
  msw: {
    handlers: [
      http.get('https://wordpress.org/news/wp-json/wp/v2/menu-items', ({ request }) => {
        return HttpResponse.json({});
      })
    ]
  }
};
