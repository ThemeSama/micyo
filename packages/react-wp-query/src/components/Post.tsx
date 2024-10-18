import * as React from 'react';
import { TPost } from '../types/posts';
import { PostProvider } from '../context/PostProvider';

type TSinglePost = {
  post: TPost;
  children: React.ReactNode;
};

/**
 * Single Post
 */
const Post = ({ post, children }: TSinglePost) => {
  return <PostProvider post={post}>{children}</PostProvider>;
};

export default Post;
