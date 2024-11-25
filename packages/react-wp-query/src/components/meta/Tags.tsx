import * as React from 'react';
import usePost from '../../hooks/usePost';
import useWPContext from '../../hooks/useWPContext';

const Tags = ({ className = '' }) => {
  const { clickEvent } = useWPContext();
  const { _embedded } = usePost(),
    term = _embedded ? _embedded['wp:term']?.flat()?.filter((t) => t.taxonomy === 'post_tag') : [];

  return term ? (
    <ul className={`micyo-tags-meta ${className}`}>
      {term.map((t) => (
        <li key={t.id}>
          <a
            href={t.link}
            onClick={(event) => clickEvent && clickEvent({ event, values: t, type: 'tag' })}>
            {t.name}
          </a>
        </li>
      ))}
    </ul>
  ) : null;
};

export default Tags;
