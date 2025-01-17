import { AxiosResponseHeaders, RawAxiosResponseHeaders } from 'axios';
import { QueryKey } from '@tanstack/react-query';
import { TPost, TPostsQueryArgs } from './posts';
import { TCategoriesQueryArgs, TCategory } from './categories';
import { TTag, TTagsQueryArgs } from './tags';
import { TPagination } from './pagination';
import { TMenu, TMenusQueryArgs } from './menus';
import { TMenuItem, TMenuItemsQueryArgs } from './menu-items';
import { TPage, TPagesQueryArgs } from './pages';

export type ApiTypes = {
  posts: TPost[];
  pages: TPage[];
  categories: TCategory[];
  tags: TTag[];
  menus: TMenu[];
  'menu-items': TMenuItem[];
};

export type SingleApiTypes = {
  posts: TPost;
  pages: TPage;
  categories: TCategory;
  tags: TTag;
  menus: TMenu;
  'menu-items': TMenuItem;
};

type QueryArgsTypes = {
  posts: TPostsQueryArgs;
  pages: TPagesQueryArgs;
  categories: TCategoriesQueryArgs;
  tags: TTagsQueryArgs;
  menus: TMenusQueryArgs;
  'menu-items': TMenuItemsQueryArgs;
};

export interface IQueryParams<T extends keyof ApiTypes> {
  id?: number;
  enabled?: boolean;
  queryArgs?: QueryArgsTypes[T];
  queryKey?: QueryKey;
  type?: T;
}

export interface IQueryResults {
  id?: number;
  headers?: Headers | RawAxiosResponseHeaders | AxiosResponseHeaders;
  pagination: TPagination;
}

export type TQueryArgs = {
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
  slug?: string;
  _embed?: boolean | string | string[];
  _fields?: string | string[];
  _method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'CONNECT' | 'OPTIONS' | 'TRACE';
  [key: string]: any;
};
