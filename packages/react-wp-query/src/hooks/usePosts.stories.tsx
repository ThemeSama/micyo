import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import usePosts from './usePosts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TPosts } from '../types';
import { WPProvider } from '../context/WPProvider';

const meta: Meta<typeof usePosts> = {
  title: 'react-wp-query/usePosts',
  decorators: [
    (Story) => {
      const queryClient = new QueryClient();

      return (
        <WPProvider api="https://wordpress.org/news/wp-json/wp/v2">
          <QueryClientProvider client={queryClient}>
            <Story />
          </QueryClientProvider>
        </WPProvider>
      );
    }
  ],
  parameters: {
    layout: 'centered'
  }
};

export default meta;
type Story = StoryObj<typeof usePosts>;

export const List: Story = {
  render: () => {
    const [page, setPage] = React.useState(1);
    const { posts, pagination } = usePosts({ page, per_page: 3 });

    return posts?.isLoading ? (
      <>Loading...</>
    ) : (
      <>
        <ul>
          {posts?.data?.length &&
            posts?.data?.map((post: TPosts) => (
              <li key={`posts-${post.id}`}>
                <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
              </li>
            ))}
        </ul>
        <button onClick={() => setPage((p) => p - 1)} disabled={!pagination.hasPrev}>
          Prev Page
        </button>
        <input
          value={page}
          type="number"
          max={pagination.pages}
          min={1}
          onChange={(e) => setPage(Number(e.target.value))}
        />
        <button onClick={() => setPage((p) => p + 1)} disabled={!pagination.hasNext}>
          Next Page
        </button>
        <pre>
          Current Page: {pagination.page} / Total Pages: {pagination.pages} / Per Page:{' '}
          {pagination.per_page} / Total: {pagination.total}
        </pre>
      </>
    );
  }
};

export const Single: Story = {
  render: () => {
    const { post } = usePosts({ id: 203 });

    return post?.isLoading ? (
      <>Loading...</>
    ) : (
      <>
        <h1 dangerouslySetInnerHTML={{ __html: post?.data?.title?.rendered }} />
        <div dangerouslySetInnerHTML={{ __html: post?.data?.content?.rendered }} />
      </>
    );
  }
};
