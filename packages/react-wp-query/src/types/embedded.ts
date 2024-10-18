import { TTerm } from './extras';
import { TUsers } from './users';

export type TEmbedded = {
  author?: TUsers[];
  'wp:term'?: TTerm[];
  [key: string]: any;
};
