import { UseQueryResult } from '@tanstack/react-query';
import { IQueryResults, TQueryArgs } from './query';

export type TMenu = {
  id?: number;
  description?: string;
  name?: string;
  slug?: string;
  meta?: object;
  locations?: [];
  auto_add?: boolean;
};

export type TMenusQueryArgs = TQueryArgs & {};

export interface IMenusQueryResults extends IQueryResults {
  menu?: UseQueryResult;
  menus?: UseQueryResult;
}
