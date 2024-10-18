import * as React from 'react';
import usePost from '../hooks/usePost';

const Content = () => {
  const { content } = usePost();
  return content ? <div dangerouslySetInnerHTML={{ __html: content?.rendered || '' }} /> : null;
};

export default Content;
