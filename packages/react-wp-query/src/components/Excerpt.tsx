import * as React from 'react';
import { usePost } from '../hooks';

export const Excerpt = ({ className = '' }) => {
  const { excerpt } = usePost();
  return excerpt ? (
    <div
      dangerouslySetInnerHTML={{ __html: excerpt?.rendered || '' }}
      className={`micyo-article-excerpt ${className}`}
    />
  ) : null;
};
