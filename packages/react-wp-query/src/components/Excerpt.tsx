import * as React from 'react';
import usePost from '../hooks/usePost';

const Excerpt = () => {
  const { excerpt } = usePost();
  return excerpt ? <div dangerouslySetInnerHTML={{ __html: excerpt?.rendered || '' }} /> : null;
};

export default Excerpt;
