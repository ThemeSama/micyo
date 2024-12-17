import { UseQueryResult } from '@tanstack/react-query';
import { AxiosResponseHeaders, RawAxiosResponseHeaders } from 'axios';
import { TPagination } from './pagination';
import { TEmbedded } from './embedded';

export type TCategory = {
  id?: number;
  count?: number;
  description?: string;
  link?: string;
  name?: string;
  slug?: string;
  taxonomy?: string;
  parent?: number;
  meta?: object;
  _embedded?: TEmbedded;
};

export type TCategoriesArgs = {
  context?: 'view' | 'embed' | 'edit';
  page?: number;
  per_page?: number;
  search?: string;
  exclude?: number;
  include?: number;
  order?: 'asc' | 'desc';
  orderby?:
    | 'id'
    | 'include'
    | 'name'
    | 'slug'
    | 'include_slugs'
    | 'term_group'
    | 'description'
    | 'count';
  hide_empty?: boolean;
  parent?: number;
  post?: number;
  slug?: string;
  _embed?: boolean | string | string[];
  _fields?: string | string[];
  _method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'CONNECT' | 'OPTIONS' | 'TRACE';
  [key: string]: any;
};

export interface ICategoriesQueryResults {
  id?: number;
  category: UseQueryResult;
  categories: UseQueryResult;
  headers?: Headers | RawAxiosResponseHeaders | AxiosResponseHeaders;
  pagination: TPagination;
}
