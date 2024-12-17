import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { format } from 'date-fns';
import { WPProvider } from '../context';
import { TClickArgs, TCategory } from '../types';
import { useCategories } from './useCategories';

const queryClient = new QueryClient();

const meta: Meta<typeof useCategories> = {
  title: 'react-wp-query/useCategories',
  decorators: [
    (Story) => {
      const clickEvent = React.useCallback(({ event, type, values }: TClickArgs) => {
        event.preventDefault();
        //
      }, []);

      const formatDate = React.useCallback((date: string) => {
        return format(date, 'MMMM dd, yyyy');
      }, []);

      return (
        <WPProvider
          api="https://wordpress.org/news/wp-json/"
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
type Story = StoryObj<typeof useCategories>;

export const Categories: Story = {
  render: () => {
    const { categories } = useCategories({
      queryArgs: {
        page: 1,
        per_page: 99
      }
    });

    return (
      <ul>
        {Array.isArray(categories?.data) &&
          categories?.data.map((category) => (
            <li key={category?.id}>
              {category?.name}
              {category?.count}
            </li>
          ))}
      </ul>
    );
  }
};

export const Category: Story = {
  render: () => {
    const { category } = useCategories({
      id: 143
    });

    const data = category.data as TCategory;

    return <span>{data?.name}</span>;
  }
};
