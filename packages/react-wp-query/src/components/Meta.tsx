import * as React from 'react';
import usePost from '../hooks/usePost';
import Author from './meta/Author';
import Categories from './meta/Categories';

const Meta = () => {
  const { _embedded } = usePost();
  return _embedded ? (
    <div>
      <Author />
      <Categories />
    </div>
  ) : null;
};

export default Meta;
