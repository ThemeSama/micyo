import * as React from 'react';
import usePost from '../hooks/usePost';
import Author from './meta/Author';
import Categories from './meta/Categories';
import Tags from './meta/Tags';
import Date from './meta/Date';

const Meta = ({ className = '' }) => {
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

export default Meta;
