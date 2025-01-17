import * as React from 'react';
import { TPage } from '../types';
import { PostProvider } from '../context';

type TSinglePage = {
  page: TPage;
  className?: string;
  children: React.ReactNode;
};

/**
 * Single Page
 */
export const Page = ({ page, className = '', children }: TSinglePage) => {
  return (
    <PostProvider post={page}>
      <div className={`micyo-page ${className}`}>{children}</div>
    </PostProvider>
  );
};
