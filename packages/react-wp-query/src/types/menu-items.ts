import { UseQueryResult } from '@tanstack/react-query';
import { IQueryResults, TQueryArgs } from './query';
import { TTitle } from './extras';

export type TMenuItem = {
  title?: TTitle | string;
  id?: number;
  type_label?: string;
  type?: 'taxonomy' | 'post_type' | 'post_type_archive' | 'custom';
  status?: 'publish' | 'future' | 'draft' | 'pending' | 'private';
  parent?: number;
  attr_title?: string;
  classes?: string[];
  description?: string;
  menu_order?: number;
  object?: string;
  object_id?: number;
  target?: string;
  url?: string;
  xfn?: [];
  invalid?: boolean;
  menus?: number;
  meta?: object;
};

export type TMenuItemsQueryArgs = TQueryArgs & {
  after?: string;
  modified_after?: string;
  before?: string;
  modified_before?: string;
  offset?: number;
  orderby?:
    | 'author'
    | 'date'
    | 'id'
    | 'include'
    | 'modified'
    | 'parent'
    | 'relevance'
    | 'slug'
    | 'include_slugs'
    | 'title'
    | 'menu_order';
  search_columns?: string[];
  status?: 'publish' | 'future' | 'draft' | 'pending' | 'private';
  tax_relation?: 'AND' | 'OR';
  menus?: number;
  menus_exclude?: number[];
  menu_order?: 'asc' | 'desc';
};

export interface IMenuItemsQueryResults extends IQueryResults {
  menuItem?: UseQueryResult;
  menuItems?: UseQueryResult;
}
