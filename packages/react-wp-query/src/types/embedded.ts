import { TTerm } from './extras';
import { TFeaturedMedia } from './media';
import { TUsers } from './users';

export type TEmbedded = {
  author?: TUsers[];
  'wp:term'?: TTerm[];
  'wp:featuredmedia'?: TFeaturedMedia[];
  [key: string]: any;
};
