import { UseApiParams } from '../types';
import { IPostsQueryResults } from '../types/posts';
import { useWPQuery } from './useWPQuery';

export const usePosts = ({
  id,
  queryKey = ['posts'],
  enabled = true,
  queryArgs
}: UseApiParams<'posts'>): IPostsQueryResults => {
  const { list, single, headers, pagination } = useWPQuery({
    id,
    enabled,
    queryArgs,
    queryKey,
    type: 'posts'
  });

  return {
    id,
    post: single,
    posts: list,
    headers,
    pagination
  };
};
