import { IQueryParams } from '../types';
import { ICategoriesQueryResults } from '../types';
import { useWPQuery } from './useWPQuery';

export const useCategories = ({
  id,
  queryKey = ['categories'],
  enabled = true,
  queryArgs
}: IQueryParams<'categories'>): ICategoriesQueryResults => {
  const { list, single, headers, pagination } = useWPQuery({
    id,
    enabled,
    queryArgs,
    queryKey,
    type: 'categories'
  });

  return {
    id,
    category: single,
    categories: list,
    headers,
    pagination
  };
};
