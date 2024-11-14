import { MouseEvent } from 'react';

export type TRendered = {
  rendered: string;
};

export type TTitle = TRendered & {};

export type TContent = TRendered & {
  protected: boolean;
};

export type TExcerpt = TRendered & {
  protected: boolean;
};

export type TGuid = TRendered & {};

export type TCaption = TRendered & {};

export type TClickArgs = {
  event: MouseEvent;
  values: any;
  type: 'author' | 'category' | 'tag';
};

export type TClickEvent = (args: TClickArgs) => void;

export interface UseSettings {
  api: string;
  clickEvent?: TClickEvent;
  formatDate?: TDateFormat;
}

export type TTerm = {
  id?: number;
  link?: string;
  name?: string;
  slug?: string;
  taxonomy?: string;
  _links?: object;
};

export type TDateFormat = (date: string) => string | Date;
