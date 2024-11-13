import React, { ReactNode } from 'react';
import WPContext from './WPContext';
import { TClickEvent, UseSettings } from '../types/extras';

interface ISettings {
  api: string;
  clickEvent?: TClickEvent;
  children: ReactNode;
}

export const WPProvider = ({ api, clickEvent, children }: ISettings) => {
  const contextValues: UseSettings = {
    api,
    clickEvent
  };

  return <WPContext.Provider value={contextValues}>{children}</WPContext.Provider>;
};
