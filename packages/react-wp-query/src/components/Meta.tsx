import * as React from 'react';
import { usePost } from '../hooks';
import { Categories, Author, Tags, Date } from './meta/index';

export const Meta = ({ className = '' }) => {
  const { _embedded } = usePost();
  return _embedded ? (
    <div className={`micyo-entry-meta ${className}`}>
      <Author />
      <Date />
      <Categories />
      <Tags />
    </div>
  ) : null;
};
