import { AxiosResponseHeaders } from 'axios';

export type TPagination = {
  pages: number;
  total: number;
  hasNext: boolean;
  hasPrev: boolean;
};

export interface IPaginationResults {
  pagination: TPagination;
  headers?: Headers | AxiosResponseHeaders;
  setHeaders: Function;
}

export type TResponseHeaders = Headers | AxiosResponseHeaders;
