import { IQueryParams, IPagesQueryResults } from '../types';
import { useWPQuery } from './useWPQuery';

export const usePages = ({
  id,
  queryKey = ['pages'],
  enabled = true,
  queryArgs
}: IQueryParams<'pages'>): IPagesQueryResults => {
  const { list, single, headers, pagination } = useWPQuery({
    id,
    enabled,
    queryArgs,
    queryKey,
    type: 'pages'
  });

  return {
    id,
    page: single,
    pages: list,
    headers,
    pagination
  };
};
