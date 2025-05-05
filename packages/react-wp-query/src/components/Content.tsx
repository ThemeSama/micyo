import * as React from 'react';
import { usePost } from '../hooks';

export const Content = ({ className = '' }) => {
  const { content } = usePost();
  return content ? (
    <div
      dangerouslySetInnerHTML={{ __html: content?.rendered || '' }}
      className={`micyo-article-content ${className}`}
    />
  ) : null;
};
