import * as React from 'react';
import { TPost } from '../types';
import { PostProvider } from '../context';

type TSinglePost = {
  post: TPost;
  className?: string;
  children: React.ReactNode;
};

/**
 * Single Post
 */
export const Post = ({ post, className = '', children }: TSinglePost) => {
  return (
    <PostProvider post={post}>
      <article className={`micyo-article ${className}`}>{children}</article>
    </PostProvider>
  );
};
