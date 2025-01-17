import { UseQueryResult } from '@tanstack/react-query';
import { IQueryResults, TQueryArgs } from './query';

/**
 * Represents a WordPress tag.
 *
 * @see https://developer.wordpress.org/rest-api/reference/tags/
 *
 * @property {number} [id] - Unique identifier for the tag.
 * @property {number} [count] - Number of published posts for the tag.
 * @property {string} [description] - HTML description of the tag.
 * @property {string} [link] - URL of the tag.
 * @property {string} [name] - HTML title for the tag.
 * @property {string} [slug] - An alphanumeric identifier for the tag unique to its type.
 * @property {string} [taxonomy] - Type attribution for the tag.
 * @property {object} [meta] - Meta fields.
 */
export type TTag = {
  id?: number;
  count?: number;
  description?: string;
  link?: string;
  name?: string;
  slug?: string;
  taxonomy?: string;
  meta?: object;
};

export type TTagsQueryArgs = TQueryArgs & {
  offset?: number;
  post?: number;
};

export interface ITagsQueryResults extends IQueryResults {
  tag?: UseQueryResult;
  tags?: UseQueryResult;
}
