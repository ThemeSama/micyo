import * as React from 'react';
import usePost from '../hooks/usePost';

const Title = () => {
  const { title } = usePost();
  return title ? <h3 dangerouslySetInnerHTML={{ __html: title?.rendered || '' }} /> : null;
};

export default Title;
