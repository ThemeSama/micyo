import React, { ReactNode, useEffect } from 'react';
import WPContext from './WPContext';
import { TClickEvent, TDateFormat, UseWPContext } from '../types/extras';
import apiFetch from '@wordpress/api-fetch';

interface IWPProviderProps {
  api: string;
  clickEvent?: TClickEvent;
  formatDate?: TDateFormat;
  children: ReactNode;
}

export const WPProvider = ({ api, clickEvent, formatDate, children }: IWPProviderProps) => {
  const contextValues: UseWPContext = {
    api,
    clickEvent,
    formatDate
  };

  // create root url
  if (api) {
    apiFetch.use(apiFetch.createRootURLMiddleware(api));
  }

  return <WPContext.Provider value={contextValues}>{children}</WPContext.Provider>;
};
