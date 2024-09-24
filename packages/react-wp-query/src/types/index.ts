export type TTitle = {
  rendered: string;
};

export type TContent = {
  rendered: string;
};

export type TExcerpt = {
  rendered: string;
};

export type TPosts = {
  id: Number;
  date: string;
  date_gmt: string;
  guid: object;
  slug: string;
  title: TTitle;
  content: TContent;
  excerpt: TExcerpt;
};

export interface UseSettings {
  api: string;
}
