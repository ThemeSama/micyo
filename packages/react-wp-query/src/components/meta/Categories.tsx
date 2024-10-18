import * as React from 'react';
import usePost from '../../hooks/usePost';

const Categories = () => {
  const { _embedded } = usePost(),
    term = _embedded ? _embedded['wp:term']?.filter((t) => t.taxonomy === 'category') : [];

  return term ? (
    <ul>
      {term.map((t) => (
        <li key={t.id}>{t.name}</li>
      ))}
    </ul>
  ) : null;
};

export default Categories;
