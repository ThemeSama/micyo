import React, { ReactNode } from 'react';
import WPContext from './WPContext';
import { TClickEvent, TDateFormat, UseSettings } from '../types/extras';

interface ISettings {
  api: string;
  clickEvent?: TClickEvent;
  formatDate?: TDateFormat;
  children: ReactNode;
}

export const WPProvider = ({ api, clickEvent, formatDate, children }: ISettings) => {
  const contextValues: UseSettings = {
    api,
    clickEvent,
    formatDate
  };

  return <WPContext.Provider value={contextValues}>{children}</WPContext.Provider>;
};
