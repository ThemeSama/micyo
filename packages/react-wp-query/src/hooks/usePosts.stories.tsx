import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { format } from 'date-fns';

import usePosts from './usePosts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TPost } from '../types/posts';
import { WPProvider } from '../context/WPProvider';
import Post from '../components/Post';
import Excerpt from '../components/Excerpt';
import Title from '../components/Title';
import Content from '../components/Content';
import PostMeta from '../components/Meta';
import FeaturedImage from '../components/FeaturedImage';
import { TClickArgs } from '../types/extras';
import Categories from '../components/meta/Categories';
import Date from '../components/meta/Date';
import Tags from '../components/meta/Tags';
import Author from '../components/meta/Author';

const meta: Meta<typeof usePosts> = {
  title: 'react-wp-query/usePosts',
  decorators: [
    (Story) => {
      const queryClient = new QueryClient();
      const clickEvent = React.useCallback(({ event, type, values }: TClickArgs) => {
        event.preventDefault();
        console.log(type, values);
      }, []);

      const formatDate = React.useCallback((date: string) => {
        return format(date, 'MMMM dd, yyyy');
      }, []);

      return (
        <WPProvider
          api="https://wordpress.org/news/wp-json/wp/v2"
          clickEvent={clickEvent}
          formatDate={formatDate}>
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
    const { posts, pagination } = usePosts({
      queryArgs: {
        page,
        per_page: 3,
        _embed: ['author', 'wp:term'],
        _fields: ['id', 'title', 'date', 'excerpt', '_embedded', '_links']
      }
    });

    return posts?.isLoading ? (
      <>Loading...</>
    ) : (
      <>
        <h1>
          News <span className="micyo-total-news">{pagination.total} total</span>
        </h1>
        {Array.isArray(posts?.data) &&
          posts?.data?.map((post: TPost) => (
            <Post key={`posts-${post.id}`} post={post}>
              <header>
                <Title />
                <div className="micyo-article-meta-storybook">
                  <Author />
                  <Categories />
                </div>
              </header>
              <Excerpt />
              <footer>
                <Date />
                <Tags />
              </footer>
            </Post>
          ))}

        <button onClick={() => setPage((p) => p - 1)} disabled={!pagination.hasPrev}>
          Prev
        </button>
        <input
          value={page}
          type="number"
          max={pagination.pages}
          min={1}
          onChange={(e) => setPage(Number(e.target.value))}
        />
        <button onClick={() => setPage((p) => p + 1)} disabled={!pagination.hasNext}>
          Next
        </button>
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
          data?.map((post: TPost) => (
            <Post key={`posts-${post.id}`} post={post}>
              <Title />
              <Excerpt />
            </Post>
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

export const CategoryFilteredPosts: Story = {
  render: () => {
    const [page, setPage] = React.useState(1);
    const { posts, pagination } = usePosts({
      queryArgs: { page, per_page: 3, categories: [2, 5, 7] }
    });
    const { data, isLoading } = posts;

    return isLoading ? (
      <>Loading...</>
    ) : (
      <>
        {Array.isArray(data) &&
          data?.length &&
          data?.map((post: TPost) => (
            <Post key={`posts-${post.id}`} post={post}>
              <Title />
              <Excerpt />
            </Post>
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

export const Single: Story = {
  render: () => {
    const { post } = usePosts({ id: 18066, queryArgs: { _embed: true } });
    const data = post.data as TPost;

    return post.isLoading ? (
      <>Loading...</>
    ) : (
      <Post post={data}>
        <Title />
        <PostMeta />
        <Content />
      </Post>
    );
  }
};

export const PostFeaturedImage: Story = {
  render: () => {
    const { post } = usePosts({ id: 12879, queryArgs: { _embed: true } });
    const data = post.data as TPost;

    return post.isLoading ? (
      <>Loading...</>
    ) : (
      <Post post={data}>
        <FeaturedImage />
        <Title />
        <PostMeta />
        <Content />
      </Post>
    );
  }
};

export const PasswordProtectedPost: Story = {
  render: () => {
    const [password, setPassword] = React.useState('');
    const { post } = usePosts({ id: 1168, queryArgs: { password } });
    const data = post.data as TPost;

    return post.isLoading ? (
      <>Loading...</>
    ) : (
      <Post post={data}>
        <Title />
        <Content />
        {!password && <button onClick={() => setPassword('enter')}>Open Content</button>}
      </Post>
    );
  }
};
