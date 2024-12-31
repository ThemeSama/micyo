import { useMemo } from 'react';
import { usePagination } from './usePagination';
import { useQuery } from '@tanstack/react-query';
import { addQueryArgs } from '@wordpress/url';
import { AxiosResponse } from 'axios';
import apiFetch from '@wordpress/api-fetch';
import { isFetchResponse } from '../helpers/isFetchResponse';
import { ApiTypes, SingleApiTypes, IQueryParams } from '../types';

export const useWPQuery = <T extends keyof ApiTypes>({
  id,
  enabled = true,
  queryArgs,
  queryKey = [],
  type
}: IQueryParams<T>) => {
  const { pagination, headers, setHeaders } = usePagination(queryArgs?.page);

  const queryParams = useMemo(() => {
    return addQueryArgs('', queryArgs);
  }, [queryArgs]);

  const list = useQuery<ApiTypes[T]>({
    queryKey: [...queryParams, ...queryKey],
    enabled: enabled && !id,
    queryFn: async ({ signal }): Promise<ApiTypes[T]> => {
      const response: Response | AxiosResponse = await apiFetch({
        path: addQueryArgs(`/wp/v2/${type}`, queryArgs),
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

  const single = useQuery<SingleApiTypes[T]>({
    queryKey: [`${type}-${id}`, ...queryParams, ...queryKey],
    enabled: !!id,
    queryFn: async ({ signal }): Promise<SingleApiTypes[T]> => {
      const response: Response | AxiosResponse = await apiFetch({
        path: addQueryArgs(`/wp/v2/${type}/${id}`, queryArgs),
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

  return { list, single, headers, pagination };
};
