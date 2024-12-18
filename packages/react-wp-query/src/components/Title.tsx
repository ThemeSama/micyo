import * as React from 'react';
import { usePost } from '../hooks';

export const Title = ({ className = '' }) => {
  const { title } = usePost();
  return title ? (
    <h3
      className={`micyo-article-title ${className}`}
      dangerouslySetInnerHTML={{ __html: title?.rendered || '' }}
    />
  ) : null;
};
