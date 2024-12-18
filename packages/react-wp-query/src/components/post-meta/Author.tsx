import * as React from 'react';
import { usePost, useWPContext } from '../../hooks';
import { TUsers } from '../../types';

export const Author = ({ className = '' }) => {
  const { clickEvent } = useWPContext();
  const { _embedded } = usePost();
  return _embedded?.author ? (
    <div className={`micyo-author-meta ${className}`}>
      {_embedded.author.map((_author: TUsers) => (
        <a
          key={`author-${_author.id}`}
          href={_author.link}
          onClick={(event) => clickEvent && clickEvent({ event, values: _author, type: 'author' })}>
          {_author.name}
        </a>
      ))}
    </div>
  ) : null;
};
