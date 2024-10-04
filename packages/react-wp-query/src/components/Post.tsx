import * as React from 'react';
import { TPost } from '../types';

type TSinglePost = {
  post: TPost;
  excerpt: boolean;
  children: React.ReactNode;
};

/**
 * Single Post
 */
const Post = ({ post, excerpt = false, children }: TSinglePost) => {
  return (
    <div>
      <header>
        <h3 dangerouslySetInnerHTML={{ __html: post?.title?.rendered || '' }} />
        <div dangerouslySetInnerHTML={{ __html: post?.date || '' }} />
      </header>
      {excerpt ? (
        <div dangerouslySetInnerHTML={{ __html: post?.excerpt?.rendered || '' }} />
      ) : (
        <div dangerouslySetInnerHTML={{ __html: post?.content?.rendered || '' }} />
      )}

      {children}
    </div>
  );
};

export default Post;
