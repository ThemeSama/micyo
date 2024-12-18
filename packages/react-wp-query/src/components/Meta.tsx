import * as React from 'react';
import { usePost } from '../hooks';
import { Categories, Author, Tags, PostDate } from './post-meta';

export const Meta = ({ className = '' }) => {
  const { _embedded } = usePost();
  return _embedded ? (
    <div className={`micyo-entry-meta ${className}`}>
      <Author />
      <PostDate />
      <Categories />
      <Tags />
    </div>
  ) : null;
};
