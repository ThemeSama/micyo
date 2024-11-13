import * as React from 'react';
import usePost from '../../hooks/usePost';
import { TUsers } from '../../types/users';
import useSettings from '../../hooks/useSettings';

const Author = ({ className = '' }) => {
  const { clickEvent } = useSettings();
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

export default Author;
