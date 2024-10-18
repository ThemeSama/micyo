import * as React from 'react';
import usePost from '../../hooks/usePost';
import { TUsers } from '../../types/users';

const Author = () => {
  const { _embedded } = usePost();
  return _embedded?.author ? (
    <div>
      {_embedded.author.map((_author: TUsers) => (
        <div>{_author.name}</div>
      ))}
    </div>
  ) : null;
};

export default Author;
