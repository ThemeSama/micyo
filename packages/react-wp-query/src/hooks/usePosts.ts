import { useQuery } from '@tanstack/react-query';
import { useCallback, useMemo, useState } from 'react';
import useWPContext from './useWPContext';
import { TPost, TPostsPagination, IPosts, IPostsQueryResults } from '../types/posts';
import apiFetch from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';
import { AxiosResponseHeaders, AxiosResponse, RawAxiosResponseHeaders } from 'axios';
import { isFetchResponse } from '../helpers/isFetchResponse';

const usePosts = ({
  id,
  queryKey = ['posts'],
  enabled = true,
  queryArgs
}: IPosts): IPostsQueryResults => {
  const { api } = useWPContext();

  const [headers, setHeaders] = useState<
    Headers | RawAxiosResponseHeaders | AxiosResponseHeaders
  >();

  const pagination: TPostsPagination = useMemo(() => {
    let total: number = 1,
      pages: number = 1;

    if (
      headers &&
      typeof headers?.get === 'function' &&
      headers.get('x-wp-total') &&
      headers.get('x-wp-totalpages')
    ) {
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

  // detect queryArgs changes and trigger requests
  const queryParams = useMemo(() => {
    return addQueryArgs('', queryArgs);
  }, [queryArgs]);

  const posts = useQuery({
    queryKey: [...queryParams, ...queryKey],
    enabled: enabled && !id ? true : false,
    queryFn: async ({ signal }): Promise<TPost[]> => {
      const response: Response | AxiosResponse = await apiFetch({
        path: addQueryArgs('/wp/v2/posts', queryArgs),
        signal,
        parse: false
      });

      setHeaders(() => response.headers);

      // fetch api return
      if (isFetchResponse(response)) {
        return response.json();
      }

      // axios return
      return response?.data;
    }
  });

  const post = useQuery({
    queryKey: [`post-${id}`, ...queryParams, ...queryKey],
    enabled: id ? true : false,
    queryFn: async ({ signal }): Promise<TPost> => {
      const response: Response | AxiosResponse = await apiFetch({
        path: addQueryArgs(`/wp/v2/posts/${id}`, queryArgs),
        signal,
        parse: false
      });

      setHeaders(() => response.headers);

      // fetch api return
      if (isFetchResponse(response)) {
        return response.json();
      }

      // axios return
      return response?.data;
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
