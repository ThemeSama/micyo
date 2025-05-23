import { IQueryParams, IPostsQueryResults } from '../types';
import { useWPQuery } from './useWPQuery';

export const usePosts = ({
  id,
  queryKey = ['posts'],
  enabled = true,
  queryArgs
}: IQueryParams<'posts'>): IPostsQueryResults => {
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
