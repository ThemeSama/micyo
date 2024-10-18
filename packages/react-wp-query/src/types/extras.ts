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

export interface UseSettings {
  api: string;
}

export type TTerm = {
  id?: number;
  link?: string;
  name?: string;
  slug?: string;
  taxonomy?: string;
  _links?: object;
};
