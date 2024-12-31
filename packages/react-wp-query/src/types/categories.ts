import { UseQueryResult } from '@tanstack/react-query';
import { TEmbedded } from './embedded';
import { IQueryResults, TQueryArgs } from './query';

/**
 * Represents a WordPress category.
 *
 * @see https://developer.wordpress.org/rest-api/reference/categories/
 */
export type TCategory = {
  /**
   * Unique identifier for the category.
   */
  id?: number;

  /**
   * Number of published posts for the category.
   */
  count?: number;

  /**
   * HTML description of the category.
   */
  description?: string;

  /**
   * URL of the category.
   */
  link?: string;

  /**
   * HTML title for the category.
   */
  name?: string;

  /**
   * An alphanumeric identifier for the category unique to its type.
   */
  slug?: string;

  /**
   * Type attribution for the term.
   */
  taxonomy?: string;

  /**
   * The parent category ID.
   */
  parent?: number;

  /**
   * Meta fields.
   */
  meta?: object;

  /**
   * Embedded resources.
   */
  _embedded?: TEmbedded;
};

export type TCategoriesQueryArgs = TQueryArgs & {
  parent?: number;
  post?: number;
};

export interface ICategoriesQueryResults extends IQueryResults {
  category?: UseQueryResult;
  categories?: UseQueryResult;
}
