import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { useCallback, useMemo, useState } from 'react';
import useSettings from './useSettings';
import { TPost, TPostsPagination, IPosts, IPostsQueryResults } from '../types/posts';

const usePosts = ({
  id,
  queryKey = ['posts'],
  enabled = true,
  queryArgs
}: IPosts): IPostsQueryResults => {
  const { api } = useSettings();

  const [headers, setHeaders] = useState<Headers>();

  const pagination: TPostsPagination = useMemo(() => {
    let total: number = 1,
      pages: number = 1;

    if (headers && headers.get('x-wp-total') && headers.get('x-wp-totalpages')) {
      total = headers.get('x-wp-total') !== null ? Number(headers.get('x-wp-total')) : 1;
      pages = headers.get('x-wp-totalpages') !== null ? Number(headers.get('x-wp-totalpages')) : 1;
    }

    return {
      pages,
      total,
      hasNext: queryArgs?.page ? pages > queryArgs.page : false,
      hasPrev: queryArgs?.page ? queryArgs.page > 1 : false,
      ...queryArgs
    };
  }, [headers, queryArgs]);

  const queryParams = useMemo(() => {
    const params = new URLSearchParams(queryArgs);

    return params;
  }, [queryArgs]);

  const posts = useQuery({
    queryKey: [...queryParams, ...queryKey],
    enabled: enabled && !id ? true : false,
    queryFn: async ({ signal }): Promise<TPost[]> => {
      const response = await fetch(`${api}/posts?${queryParams}`, { signal });
      setHeaders(() => response.headers);
      return response.json();
    }
  });

  const post = useQuery({
    queryKey: [`post-${id}`, ...queryParams, ...queryKey],
    enabled: id ? true : false,
    queryFn: async ({ signal }): Promise<TPost> => {
      const response = await fetch(`${api}/posts/${id}?${queryParams}`, { signal });
      setHeaders(response.headers);
      return response.json();
    }
  });

  const updatePost = useCallback(() => {}, []);
  const deletePost = useCallback(() => {}, []);

  return {
    id,
    post,
    posts,
    headers,
    pagination,
    updatePost,
    deletePost
  };
};

export default usePosts;
