import { IQueryParams } from '../types';
import { IMenusQueryResults } from '../types/menus';
import { useWPQuery } from './useWPQuery';

export const useMenus = ({
  id,
  queryKey = ['menus'],
  enabled = true,
  queryArgs
}: IQueryParams<'menus'>): IMenusQueryResults => {
  const { list, single, headers, pagination } = useWPQuery({
    id,
    enabled,
    queryArgs,
    queryKey,
    type: 'menus'
  });

  return {
    id,
    menu: single,
    menus: list,
    headers,
    pagination
  };
};
