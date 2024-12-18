import * as React from 'react';
import { usePost } from '../hooks';

export const Excerpt = () => {
  const { excerpt } = usePost();
  return excerpt ? <div dangerouslySetInnerHTML={{ __html: excerpt?.rendered || '' }} /> : null;
};
