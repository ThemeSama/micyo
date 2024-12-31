import { IQueryParams } from '../types';
import { IMenuItemsQueryResults } from '../types/menu-items';
import { IMenusQueryResults } from '../types/menus';
import { useWPQuery } from './useWPQuery';

export const useMenuItems = ({
  id,
  queryKey = ['menu-items'],
  enabled = true,
  queryArgs
}: IQueryParams<'menu-items'>): IMenuItemsQueryResults => {
  const { list, single, headers, pagination } = useWPQuery({
    id,
    enabled,
    queryArgs,
    queryKey,
    type: 'menu-items'
  });

  return {
    id,
    menuItem: single,
    menuItems: list,
    headers,
    pagination
  };
};
