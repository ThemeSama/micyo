import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { usePosts } from './usePosts';
import { TPost, TPostsArgs } from '../types';
import {
  Post,
  Excerpt,
  Title,
  Content,
  Meta as PostMeta,
  FeaturedImage,
  Categories,
  PostDate,
  Tags,
  Author
} from '../components';
import { StorybookDecorator } from '../helpers/StorybookDecorator';

const meta: Meta<typeof usePosts> = {
  title: 'react-wp-query/usePosts',
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
type Story = StoryObj<typeof usePosts>;

export const Posts: Story = {
  render: () => {
    const [placeholder, setPlaceholder] = React.useState(1);
    const [page, setPage] = React.useState(1);
    const { posts, pagination } = usePosts({
      queryArgs: {
        page,
        per_page: 3,
        _embed: ['author', 'wp:term'],
        _fields: ['id', 'title', 'date', 'excerpt', '_embedded', '_links']
      }
    });

    const nextPage = React.useCallback(() => {
      setPlaceholder(page + 1);
      setPage((p) => p + 1);
    }, [page]);

    const prevPage = React.useCallback(() => {
      setPlaceholder(page - 1);
      setPage((p) => p - 1);
    }, [page]);

    const changePage = React.useCallback((e: any) => {
      setPlaceholder(Number(e.target.value));
      if (e.key === 'Enter') {
        setPage(Number(e.target.value));
      }
    }, []);

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
                <PostDate />
                <Tags />
              </footer>
            </Post>
          ))}
        <nav className="micyo-pagination">
          <button onClick={prevPage} disabled={!pagination.hasPrev} className="micyo-btn">
            Prev
          </button>
          <div className="micyo-pagination-numbers">
            <input
              value={placeholder}
              type="number"
              max={pagination.pages}
              min={1}
              onChange={changePage}
              onKeyDown={changePage}
            />
            / {pagination?.pages}
          </div>
          <button onClick={nextPage} disabled={!pagination.hasNext} className="micyo-btn">
            Next
          </button>
        </nav>
      </>
    );
  }
};

export const AuthorPosts: Story = {
  render: (args: TPostsArgs) => {
    const { posts } = usePosts({
      queryArgs: { page: args.page, per_page: args.per_page, author: args.author }
    });
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
      </>
    );
  },
  args: {
    page: 1,
    per_page: 3,
    author: 1
  },
  argTypes: {
    page: {
      control: { type: 'number', min: 1 },
      description: 'Current page number'
    },
    per_page: {
      control: { type: 'number', min: 1 },
      description: 'Number of posts per page'
    },
    author: {
      control: { type: 'number', min: 1 },
      description: 'Author ID for filtering posts'
    }
  }
};

export const CategoryFilteredPosts: Story = {
  render: (args: TPostsArgs) => {
    const { posts } = usePosts({
      queryArgs: { page: args.page, per_page: args.per_page, categories: args.categories }
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
      </>
    );
  },
  args: {
    page: 1,
    per_page: 3,
    categories: [143, 10, 6]
  },
  argTypes: {
    page: {
      control: { type: 'number', min: 1 },
      description: 'Current page number'
    },
    per_page: {
      control: { type: 'number', min: 1 },
      description: 'Number of posts per page'
    },
    categories: {
      control: {
        type: 'inline-check',
        labels: { 143: 'Awards', 10: 'General', 6: 'Documentation' }
      },
      options: [143, 10, 6],
      description: 'Categories ID for filtering posts'
    }
  }
};

export const TagFilteredPosts: Story = {
  render: (args: TPostsArgs) => {
    const { posts } = usePosts({
      queryArgs: { page: args.page, per_page: args.per_page, tags: args.tags }
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
      </>
    );
  },
  args: {
    page: 1,
    per_page: 3,
    tags: [473, 168]
  },
  argTypes: {
    page: {
      control: { type: 'number', min: 1 },
      description: 'Current page number'
    },
    per_page: {
      control: { type: 'number', min: 1 },
      description: 'Number of posts per page'
    },
    tags: {
      control: {
        type: 'inline-check',
        labels: { 473: 'WordPress 6.1', 168: 'WordPress 3.7' }
      },
      options: [473, 168],
      description: 'Tags ID for filtering posts'
    }
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

/*export const PasswordProtectedPost: Story = {
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
};*/
