import { UseQueryResult } from '@tanstack/react-query';
import { TContent, TExcerpt, TGuid, TTitle } from './extras';
import { TEmbedded } from './embedded';
import { AxiosResponseHeaders, RawAxiosResponseHeaders } from 'axios';
import { TPagination } from './pagination';
import { IQueryResults } from './query';

/**
 * Represents a WordPress post.
 *
 * @see https://developer.wordpress.org/rest-api/reference/posts/
 */
export type TPost = {
  /**
   * The date the post was published, in the site's timezone.
   */
  date?: string | null;

  /**
   * The date the post was published, as GMT.
   */
  date_gmt?: string | null;

  /**
   * The globally unique identifier for the post.
   */
  guid?: TGuid;

  /**
   * The unique identifier for the post.
   */
  id?: number;

  /**
   * URL to the post.
   */
  link?: string;

  /**
   * The date the post was last modified, in the site's timezone.
   */
  modified?: string;

  /**
   * The date the post was last modified, as GMT.
   */
  modified_gmt?: string;

  /**
   * An alphanumeric identifier for the post unique to its type.
   */
  slug?: string;

  /**
   * A named status for the post.
   */
  status?: 'publish' | 'future' | 'draft' | 'pending' | 'private';

  /**
   * Type of post.
   */
  type?: string;

  /**
   * The title for the post.
   */
  title?: TTitle;

  /**
   * The content for the post.
   */
  content?: TContent;

  /**
   * The ID for the author of the post.
   */
  author?: number;

  /**
   * The excerpt for the post.
   */
  excerpt?: TExcerpt;

  /**
   * The ID of the featured media for the post.
   */
  featured_media?: number;

  /**
   * Whether or not comments are open on the post.
   */
  comment_status?: 'open' | 'closed';

  /**
   * Whether or not the post can be pinged.
   */
  ping_status?: 'open' | 'closed';

  /**
   * The format for the post.
   */
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

  /**
   * Meta fields.
   */
  meta?: object;

  /**
   * Whether or not the post is sticky.
   */
  sticky?: boolean;

  /**
   * The theme file to use to display the post.
   */
  template?: string;

  /**
   * The terms assigned to the post in the category taxonomy.
   */
  categories?: number[];

  /**
   * The terms assigned to the post in the post_tag taxonomy.
   */
  tags?: number[];

  /**
   * Embedded representation of the post.
   */
  _embedded?: TEmbedded;
};

/**
 * Arguments for querying posts.
 *
 * @see https://developer.wordpress.org/rest-api/reference/posts/#arguments
 */
export type TPostsQueryArgs = {
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

/**
 * Represents the results of a posts query.
 */
export interface IPostsQueryResults extends IQueryResults {
  post: UseQueryResult;
  posts: UseQueryResult;
}
