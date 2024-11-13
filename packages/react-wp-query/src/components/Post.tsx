import * as React from 'react';
import { TPost } from '../types/posts';
import { PostProvider } from '../context/PostProvider';

type TSinglePost = {
  post: TPost;
  className?: string;
  children: React.ReactNode;
};

/**
 * Single Post
 */
const Post = ({ post, className = '', children }: TSinglePost) => {
  return (
    <PostProvider post={post}>
      <article className={`micyo-article ${className}`}>{children}</article>
    </PostProvider>
  );
};

export default Post;
