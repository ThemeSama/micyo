import { QueryKey, UseQueryResult } from '@tanstack/react-query';

export type TRendered = {
  rendered: string;
};

export type TTitle = TRendered & {};
export type TContent = TRendered & {
  protected: boolean;
};
export type TExcerpt = TRendered & {
  protected: boolean;
};
export type TGuid = TRendered & {};

/**
 * Post Type
 */
export type TPost = {
  date: string | null;
  date_gmt: string | null;
  guid: TGuid;
  id: number;
  link: string;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: 'publish' | 'future' | 'draft' | 'pending' | 'private';
  type: string;
  title: TTitle;
  content: TContent;
  author: number;
  excerpt: TExcerpt;
  featured_media: number;
  comment_status: 'open' | 'closed';
  ping_status: 'open' | 'closed';
  format:
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
  meta: object;
  sticky: boolean;
  template: string;
  categories: number[];
  tags: number[];
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
  [key: string]: any;
};

export type TPostsPagination = TPostsArgs & {
  pages: number;
  total: number;
  hasNext: boolean;
  hasPrev: boolean;
};

export interface UseSettings {
  api: string;
}

export interface IQuery {
  id?: number;
  queryKey?: QueryKey;
  enabled?: boolean;
  queryArgs?: TPostsArgs;
}

export interface IPosts extends IQuery {}

export interface IPostsQueryResults {
  id?: number;
  post: UseQueryResult;
  posts: UseQueryResult;
  headers?: Headers;
  pagination: TPostsPagination;
  updatePost: Function;
  deletePost: Function;
}
