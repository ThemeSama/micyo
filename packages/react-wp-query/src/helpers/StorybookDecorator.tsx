import * as React from 'react';
import { ReactNode, useCallback } from 'react';
import { format } from 'date-fns';
import { TClickArgs } from '../types';
import { WPProvider } from '../context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

interface IStorybookDecoratorArgs {
  mock?: boolean;
  children: ReactNode;
}

export const StorybookDecorator = ({ mock = false, children }: IStorybookDecoratorArgs) => {
  const api = 'https://wordpress.org/news/wp-json/';

  const clickEvent = useCallback(({ event, type, values }: TClickArgs) => {
    event.preventDefault();
    //
  }, []);

  const formatDate = useCallback((date: string) => {
    return format(date, 'MMMM dd, yyyy');
  }, []);

  return (
    <WPProvider api={api} clickEvent={clickEvent} formatDate={formatDate}>
      <QueryClientProvider client={queryClient}>
        <>{children}</>
      </QueryClientProvider>
    </WPProvider>
  );
};
