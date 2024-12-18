import * as React from 'react';
import { ReactNode, useCallback } from 'react';
import { format } from 'date-fns';
import { TClickArgs } from '../types';
import { WPProvider } from '../context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

interface IStorybookDecoratorArgs {
  children: ReactNode;
}

export const StorybookDecorator = ({ children }: IStorybookDecoratorArgs) => {
  const clickEvent = useCallback(({ event, type, values }: TClickArgs) => {
    event.preventDefault();
    //
  }, []);

  const formatDate = useCallback((date: string) => {
    return format(date, 'MMMM dd, yyyy');
  }, []);

  return (
    <WPProvider
      api="https://wordpress.org/news/wp-json/"
      clickEvent={clickEvent}
      formatDate={formatDate}>
      <QueryClientProvider client={queryClient}>
        <>{children}</>
      </QueryClientProvider>
    </WPProvider>
  );
};
