import { TCaption, TTitle } from './extras';

export type TFeaturedMedia = {
  id?: number;
  date?: string;
  slug?: string;
  type?: string;
  link?: string;
  title: TTitle;
  author?: number;
  featured_media?: number;
  caption?: TCaption;
  alt_text?: string;
  media_type?: string;
  mime_type?: string;
  media_details?: TMediaDetails;
};

export type TMediaDetails = {
  width?: number;
  height?: number;
  file?: string;
  filesize?: number;
  sizes: TMediaSizes;
};

export type TMediaSize = {
  file?: string;
  width?: number;
  height?: number;
  filesize?: number;
  mime_type?: string;
  source_url?: string;
};

export type TMediaSizes = Record<string, TMediaSize>;
