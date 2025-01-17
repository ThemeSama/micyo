import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useSettings } from './useSettings';
import { StorybookDecorator } from '../helpers/StorybookDecorator';
import { http, HttpResponse } from 'msw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { ghcolors } from 'react-syntax-highlighter/dist/esm/styles/prism';

const meta: Meta<typeof useSettings> = {
  title: 'react-wp-query/useSettings',
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
type Story = StoryObj<typeof useSettings>;

export const SettingsResponse: Story = {
  render: () => {
    const settings = useSettings();

    return settings.isLoading ? (
      <>Loading...</>
    ) : (
      <SyntaxHighlighter
        language="json"
        style={ghcolors}
        customStyle={{ border: 'none', padding: 0, margin: 0 }}>
        {JSON.stringify(settings.data, null, 2)}
      </SyntaxHighlighter>
    );
  }
};

SettingsResponse.parameters = {
  msw: {
    handlers: [
      http.get('https://wordpress.org/news/wp-json/wp/v2/settings', ({ request }) => {
        return HttpResponse.json({
          title:
            'WordPress News &#8211; The latest news about WordPress and the WordPress community',
          description: '',
          url: 'https://wordpress.org/news/',
          email: 'admin@wordpress.org',
          timezone: '',
          date_format: 'F j, Y',
          time_format: 'g:i a',
          start_of_week: 1,
          language: 'en_US',
          use_smilies: true,
          default_category: 1,
          default_post_format: '0',
          posts_per_page: 10,
          show_on_front: 'posts',
          page_on_front: 0,
          page_for_posts: 0,
          default_ping_status: 'open',
          default_comment_status: 'open',
          site_logo: null,
          site_icon: 0
        });
      })
    ]
  }
};
