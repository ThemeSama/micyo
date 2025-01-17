import { UseQueryResult } from '@tanstack/react-query';
import { TContent, TExcerpt, TGuid, TTitle } from './extras';
import { TEmbedded } from './embedded';
import { AxiosResponseHeaders, RawAxiosResponseHeaders } from 'axios';
import { TPagination } from './pagination';
import { IQueryResults } from './query';

/**
 * Represents a WordPress page.
 *
 * @see https://developer.wordpress.org/rest-api/reference/pages/
 */
export type TPage = {
  /**
   * The date the page was published, in the site's timezone.
   */
  date?: string | null;

  /**
   * The date the page was published, as GMT.
   */
  date_gmt?: string | null;

  /**
   * The globally unique identifier for the page.
   */
  guid?: TGuid;

  /**
   * The unique identifier for the page.
   */
  id?: number;

  /**
   * URL to the page.
   */
  link?: string;

  /**
   * The date the page was last modified, in the site's timezone.
   */
  modified?: string;

  /**
   * The date the page was last modified, as GMT.
   */
  modified_gmt?: string;

  /**
   * An alphanumeric identifier for the page unique to its type.
   */
  slug?: string;

  /**
   * A named status for the page.
   */
  status?: 'publish' | 'future' | 'draft' | 'pending' | 'private';

  /**
   * Type of page.
   */
  type?: string;

  /**
   * A password to protect access to the content and excerpt
   *
   */
  password?: string;

  /**
   * Permalink template for the post.
   */
  permalink_template?: string;

  /**
   * Slug automatically generated from the post title.
   */
  generated_slug?: string;

  /**
   * The ID for the parent of the post.
   */
  parent?: number;

  /**
   * The title for the page.
   */
  title?: TTitle;

  /**
   * The content for the page.
   */
  content?: TContent;

  /**
   * The ID for the author of the page.
   */
  author?: number;

  /**
   * The excerpt for the page.
   */
  excerpt?: TExcerpt;

  /**
   * The ID of the featured media for the page.
   */
  featured_media?: number;

  /**
   * Whether or not comments are open on the page.
   */
  comment_status?: 'open' | 'closed';

  /**
   * Whether or not the page can be pinged.
   */
  ping_status?: 'open' | 'closed';

  /**
   * The order of the post in relation to other posts.
   */
  menu_order?: number;

  /**
   * Meta fields.
   */
  meta?: object;

  /**
   * The theme file to use to display the page.
   */
  template?: string;

  /**
   * Embedded representation of the page.
   */
  _embedded?: TEmbedded;
};

/**
 * Arguments for querying pages.
 *
 * @see https://developer.wordpress.org/rest-api/reference/pages/#arguments
 */
export type TPagesQueryArgs = {
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
    | 'title'
    | 'menu_order';
  parent?: number;
  parent_exclude?: number[];
  search_columns?: string[];
  slug?: string;
  password?: string;
  _embed?: boolean | string | string[];
  _fields?: string | string[];
  _method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'CONNECT' | 'OPTIONS' | 'TRACE';
  [key: string]: any;
};

/**
 * Represents the results of a pages query.
 */
export interface IPagesQueryResults extends IQueryResults {
  page: UseQueryResult;
  pages: UseQueryResult;
}
