import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useCategories } from './useCategories';
import { StorybookDecorator } from '../helpers/StorybookDecorator';
import { TCategoriesQueryArgs, TCategory, TPost } from '../types';
import { usePosts } from './usePosts';
import {
  Author,
  Excerpt,
  Post,
  Tags,
  Title,
  Categories as MetaCategories,
  PostDate
} from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { ghcolors } from 'react-syntax-highlighter/dist/esm/styles/prism';

const meta: Meta<typeof useCategories> = {
  title: 'react-wp-query/useCategories',
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
type Story = StoryObj<typeof useCategories>;

export const Categories: Story = {
  render: () => {
    const [filteredCategories, setFilteredCategories] = React.useState<TCategory[]>();
    const { categories } = useCategories({
      queryArgs: {
        page: 1,
        per_page: 99,
        hide_empty: true,
        orderby: 'count',
        order: 'desc'
      }
    });

    const { posts } = usePosts({
      enabled: categories?.isFetched,
      queryArgs: {
        page: 1,
        per_page: 3,
        categories: Array.isArray(filteredCategories)
          ? filteredCategories?.map((cat) => cat?.id ?? -1)
          : [],
        _embed: ['author', 'wp:term'],
        _fields: ['id', 'title', 'date', 'excerpt', '_embedded', '_links']
      }
    });

    const isSelected = React.useCallback(
      (category: TCategory) => {
        return filteredCategories?.find((cat) => cat.id === category.id) ? 'selected' : '';
      },
      [filteredCategories]
    );

    return (
      <div className="micyo-news">
        <ul className="micyo-categories">
          <li>
            <h3>Categories</h3>
          </li>
          {Array.isArray(categories?.data) &&
            categories?.data.map((category) => (
              <li key={category?.id}>
                <button
                  type="button"
                  className={isSelected(category)}
                  onClick={() =>
                    setFilteredCategories((prevList): TCategory[] => {
                      if (Array.isArray(prevList)) {
                        if (prevList.find((cat) => cat.id === category.id)) {
                          return prevList.filter((cat) => cat.id !== category.id);
                        } else {
                          prevList?.push(category);
                          return prevList;
                        }
                      }

                      return [category];
                    })
                  }>
                  {category?.name}
                  <span className="micyo-category-count">{category?.count}</span>
                </button>
              </li>
            ))}
        </ul>
        <div className="micyo-articles">
          <h1>
            News
            <span className="micyo-total-news">
              {filteredCategories?.map((cat) => cat.name).join(', ')}
            </span>
          </h1>
          {Array.isArray(posts?.data) &&
            posts?.data?.map((post: TPost) => (
              <Post key={`posts-${post.id}`} post={post}>
                <header>
                  <Title />
                  <div className="micyo-article-meta-storybook">
                    <Author />
                    <MetaCategories />
                  </div>
                </header>
                <Excerpt />
                <footer>
                  <PostDate />
                  <Tags />
                </footer>
              </Post>
            ))}
        </div>
      </div>
    );
  }
};

export const CategoryResponse: Story = {
  render: (queryArgs: TCategoriesQueryArgs) => {
    const { category } = useCategories({
      id: 143,
      queryArgs
    });

    const data = category?.data as TCategory;

    return (
      <SyntaxHighlighter
        language="json"
        style={ghcolors}
        customStyle={{ border: 'none', padding: 0, margin: 0 }}>
        {JSON.stringify(data, null, 2)}
      </SyntaxHighlighter>
    );
  },
  args: {
    _fields: []
  },
  argTypes: {
    _fields: {
      control: {
        type: 'inline-check'
      },
      options: ['id', 'count', 'name', 'slug', 'taxonomy'],
      description: 'Response fields'
    }
  }
};
