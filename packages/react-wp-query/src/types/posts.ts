import { UseQueryResult } from '@tanstack/react-query';
import { TContent, TExcerpt, TGuid, TTitle } from './extras';
import { IQuery } from './query';
import { TEmbedded } from './embedded';
import { AxiosResponseHeaders, RawAxiosResponseHeaders } from 'axios';

/**
 * Post Type
 */
export type TPost = {
  date?: string | null;
  date_gmt?: string | null;
  guid?: TGuid;
  id?: number;
  link?: string;
  modified?: string;
  modified_gmt?: string;
  slug?: string;
  status?: 'publish' | 'future' | 'draft' | 'pending' | 'private';
  type?: string;
  title?: TTitle;
  content?: TContent;
  author?: number;
  excerpt?: TExcerpt;
  featured_media?: number;
  comment_status?: 'open' | 'closed';
  ping_status?: 'open' | 'closed';
  format?:
    | 'standard'
    | 'aside'
    | 'chat'
    | 'gallery'
    | 'link'
    | 'image'
    | 'quote'
    | 'status'
    | 'video'
    | 'audio';
  meta?: object;
  sticky?: boolean;
  template?: string;
  categories?: number[];
  tags?: number[];
  _embedded?: TEmbedded;
};

export type TPostsArgs = {
  context?: 'view' | 'embed' | 'edit';
  page?: number;
  per_page?: number;
  search?: string;
  after?: string;
  modified_after?: string;
  author?: number;
  author_exclude?: number;
  before?: string;
  modified_before?: string;
  exclude?: number;
  include?: number;
  offset?: number;
  order?: 'asc' | 'desc';
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
    | 'title';
  search_columns?: string[];
  slug?: string;
  status?: 'publish' | 'future' | 'draft' | 'pending' | 'private';
  tax_relation?: 'AND' | 'OR';
  categories?: number[];
  categories_exclude?: number[];
  tags?: number[];
  tags_exclude?: number[];
  sticky?: boolean;
  password?: string;
  _embed?: boolean | string | string[];
  _fields?: string | string[];
  _method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'CONNECT' | 'OPTIONS' | 'TRACE';
  [key: string]: any;
};

export interface IPosts extends IQuery {}

export interface IPostsQueryResults {
  id?: number;
  post: UseQueryResult;
  posts: UseQueryResult;
  headers?: Headers | RawAxiosResponseHeaders | AxiosResponseHeaders;
  pagination: TPostsPagination;
  updatePost: Function;
  deletePost: Function;
}

export type TPostsPagination = TPostsArgs & {
  pages: number;
  total: number;
  hasNext: boolean;
  hasPrev: boolean;
};
