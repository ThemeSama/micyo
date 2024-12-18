import * as React from 'react';
import { usePost, useWPContext } from '../../hooks';

export const Categories = ({ className = '' }) => {
  const { clickEvent } = useWPContext();
  const { _embedded } = usePost(),
    term = _embedded ? _embedded['wp:term']?.flat()?.filter((t) => t.taxonomy === 'category') : [];

  return term ? (
    <ul className={`micyo-categories-meta ${className}`}>
      {term.map((t) => (
        <li key={t.id}>
          <a
            href={t.link}
            onClick={(event) => clickEvent && clickEvent({ event, values: t, type: 'category' })}>
            {t.name}
          </a>
        </li>
      ))}
    </ul>
  ) : null;
};
