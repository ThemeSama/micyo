import { QueryKey } from '@tanstack/react-query';
import { TPost, TPostsArgs } from './posts';
import { TCategoriesArgs, TCategory } from './categories';

export type ApiTypes = {
  posts: TPost[];
  categories: TCategory[];
};

export type SingleApiTypes = {
  posts: TPost;
  categories: TCategory;
};

type QueryArgsTypes = {
  posts: TPostsArgs;
  categories: TCategoriesArgs;
};

export interface UseApiParams<T extends keyof ApiTypes> {
  id?: number;
  enabled?: boolean;
  queryArgs?: QueryArgsTypes[T];
  queryKey?: QueryKey;
  type?: T;
}
