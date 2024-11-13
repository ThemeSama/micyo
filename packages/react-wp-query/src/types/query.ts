import { QueryKey } from '@tanstack/react-query';
import { TPostsArgs } from './posts';

export interface IQuery {
  id?: number;
  queryKey?: QueryKey;
  enabled?: boolean;
  queryArgs?: TPostsArgs;
}
