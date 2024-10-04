import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import usePosts from './usePosts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TPost } from '../types';
import { WPProvider } from '../context/WPProvider';
import Post from '../components/Post';

const meta: Meta<typeof usePosts> = {
  title: 'react-wp-query/usePosts',
  decorators: [
    (Story) => {
      const queryClient = new QueryClient();

      return (
        <WPProvider api="https://localhost:8443/wp-json/wp/v2">
          <QueryClientProvider client={queryClient}>
            <Story />
          </QueryClientProvider>
        </WPProvider>
      );
    }
  ],
  parameters: {
    layout: 'padded'
  }
};

export default meta;
type Story = StoryObj<typeof usePosts>;

export const Posts: Story = {
  render: () => {
    const [page, setPage] = React.useState(1);
    const { posts, pagination } = usePosts({ queryArgs: { page, per_page: 3 } });

    return posts?.isLoading ? (
      <>Loading...</>
    ) : (
      <>
        {Array.isArray(posts?.data) &&
          posts?.data?.length &&
          posts?.data?.map((post: TPost) => (
            <Post key={`posts-${post.id}`} post={post} excerpt={true} />
          ))}

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

export const AuthorPosts: Story = {
  render: () => {
    const [page, setPage] = React.useState(1);
    const { posts, pagination } = usePosts({ queryArgs: { page, per_page: 3, author: 1 } });
    const { data, isLoading } = posts;

    return isLoading ? (
      <>Loading...</>
    ) : (
      <>
        {Array.isArray(data) &&
          data?.length &&
          data?.map((post: TPost) => <Post key={`posts-${post.id}`} post={post} excerpt={true} />)}

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

export const CategoryFilteredPosts: Story = {
  render: () => {
    const [page, setPage] = React.useState(1);
    const { posts, pagination } = usePosts({
      queryArgs: { page, per_page: 3, categories: [2, 7] }
    });
    const { data, isLoading } = posts;

    return isLoading ? (
      <>Loading...</>
    ) : (
      <>
        {Array.isArray(data) &&
          data?.length &&
          data?.map((post: TPost) => <Post key={`posts-${post.id}`} post={post} excerpt={true} />)}

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
    const { post } = usePosts({ id: 1 }),
      { data, isLoading } = post;

    return isLoading ? <>Loading...</> : <Post post={data} />;
  }
};

export const PasswordProtectedPost: Story = {
  render: () => {
    const [password, setPassword] = React.useState('');
    const { post } = usePosts({ id: 1168, queryArgs: { password } });
    const { data, isLoading } = post;

    return isLoading ? (
      <>Loading...</>
    ) : (
      <>
        <h1 dangerouslySetInnerHTML={{ __html: data?.title?.rendered || '' }} />
        <div dangerouslySetInnerHTML={{ __html: data?.date || '' }} />
        <div dangerouslySetInnerHTML={{ __html: data?.content?.rendered || '' }} />
        {!password && <button onClick={() => setPassword('enter')}>Open Content</button>}
      </>
    );
  }
};
