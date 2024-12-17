import React, { ReactNode } from 'react';
import { PostContext } from './PostContext';
import { TPost } from '../types';

interface IPostProviderProps {
  post: TPost;
  children: ReactNode;
}

export const PostProvider = ({ post, children }: IPostProviderProps) => {
  return <PostContext.Provider value={post}>{children}</PostContext.Provider>;
};
