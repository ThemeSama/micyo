import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { usePages } from './usePages';
import { TPage } from '../types';
import { Page, Title, Content, Meta as PageMeta } from '../components';
import { StorybookDecorator } from '../helpers/StorybookDecorator';

const meta: Meta<typeof usePages> = {
  title: 'react-wp-query/usePages',
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
type Story = StoryObj<typeof usePages>;

export const PageSlug: Story = {
  render: () => {
    const { pages } = usePages({ queryArgs: { slug: 'news' } });

    return pages.isLoading ? <>Loading...</> : <>Test</>;
  }
};

export const Single: Story = {
  render: () => {
    const { page } = usePages({ id: 15740, queryArgs: { _embed: true } });
    const data = page.data as TPage;

    return page.isLoading ? (
      <>Loading...</>
    ) : (
      <Page page={data}>
        <Title />
        <PageMeta />
        <Content />
      </Page>
    );
  }
};
