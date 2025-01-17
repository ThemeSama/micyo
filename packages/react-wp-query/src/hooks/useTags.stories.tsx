import * as React from 'react';
import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useTags } from './useTags';
import { StorybookDecorator } from '../helpers/StorybookDecorator';
import { TTag, TPost } from '../types';
import { usePosts } from './usePosts';
import {
  Author,
  Excerpt,
  Post,
  Title,
  Tags as MetaTags,
  Categories as MetaCategories,
  PostDate
} from '../components';

const meta: Meta<typeof useTags> = {
  title: 'react-wp-query/useTags',
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
type Story = StoryObj<typeof useTags>;

export const Tags: Story = {
  render: () => {
    const [filteredTags, setFilteredTags] = useState<TTag[]>();
    const { tags } = useTags({
      queryArgs: {
        page: 1,
        per_page: 99,
        hide_empty: true
      }
    });

    const { posts } = usePosts({
      enabled: tags?.isFetched,
      queryArgs: {
        page: 1,
        per_page: 3,
        tags: Array.isArray(filteredTags) ? filteredTags?.map((cat) => cat?.id ?? -1) : [],
        _embed: ['author', 'wp:term'],
        _fields: ['id', 'title', 'date', 'excerpt', '_embedded', '_links']
      }
    });

    const isSelected = React.useCallback(
      (tag: TTag) => {
        return filteredTags?.find((cat) => cat.id === tag.id) ? 'selected' : '';
      },
      [filteredTags]
    );

    return (
      <div className="micyo-news">
        <ul className="micyo-tags">
          <li>
            <h3>Tags</h3>
          </li>
          {Array.isArray(tags?.data) &&
            tags?.data.map((tag) => (
              <li key={tag?.id}>
                <button
                  type="button"
                  className={isSelected(tag)}
                  onClick={() =>
                    setFilteredTags((prevList): TTag[] => {
                      if (Array.isArray(prevList)) {
                        if (prevList.find((cat) => cat.id === tag.id)) {
                          return prevList.filter((cat) => cat.id !== tag.id);
                        } else {
                          prevList?.push(tag);
                          return prevList;
                        }
                      }

                      return [tag];
                    })
                  }>
                  {tag?.name}
                  {tag?.count}
                </button>
              </li>
            ))}
        </ul>
        <div className="micyo-articles">
          <h1>
            News
            <span className="micyo-total-news">
              {filteredTags?.map((cat) => cat.name).join(', ')}
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
                  <MetaTags />
                </footer>
              </Post>
            ))}
        </div>
      </div>
    );
  }
};

export const Tag: Story = {
  render: () => {
    const { tag } = useTags({
      id: 143
    });

    const data = tag?.data as TTag;

    return <span>{data?.name}</span>;
  }
};
