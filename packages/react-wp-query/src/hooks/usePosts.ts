import { QueryKey, useQuery } from '@tanstack/react-query';
import { useCallback, useMemo, useState } from 'react';
import useSettings from './useSettings';

interface IQuery {
  id?: number;
  page?: number;
  per_page?: number;
  offset?: number;
  queryKey?: QueryKey;
  enabled?: boolean;
}

export interface HPosts extends IQuery {}

const usePosts = ({
  id,
  queryKey = ['posts'],
  enabled = true,
  page = 1,
  per_page,
  offset
}: HPosts) => {
  const { api } = useSettings();

  const [headers, setHeaders] = useState<Headers>();

  const pagination = useMemo(() => {
    if (headers && headers.get('x-wp-total') && headers.get('x-wp-totalpages')) {
      const total = headers.get('x-wp-total') !== null ? Number(headers.get('x-wp-total')) : 1,
        pages =
          headers.get('x-wp-totalpages') !== null ? Number(headers.get('x-wp-totalpages')) : 1;

      return {
        page,
        pages,
        total,
        hasNext: pages > page,
        hasPrev: page > 1,
        per_page,
        offset
      };
    }

    return {
      page,
      pages: 1,
      total: 1,
      hasNext: false,
      hasPrev: false,
      per_page,
      offset
    };
  }, [headers, page, per_page, offset]);

  const queryParams = useMemo(() => {
    const params = new URLSearchParams();

    params.append('page', String(page));
    if (per_page) {
      params.append('per_page', String(per_page));
    }

    if (offset) {
      params.append('offset', String(offset));
    }

    return params;
  }, [page, per_page, offset]);

  const posts = useQuery({
    queryKey: [page, per_page, offset, ...queryKey],
    enabled: enabled && !id ? true : false,
    queryFn: async ({ signal }) => {
      const response = await fetch(`${api}/posts?${queryParams}`, { signal });
      setHeaders(() => response.headers);
      return response.json();
    }
  });

  const post = useQuery({
    queryKey: [`post-${id}`, ...queryKey],
    enabled: id ? true : false,
    queryFn: async ({ signal }) => {
      const response = await fetch(`${api}/posts/${id}`, { signal });
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
