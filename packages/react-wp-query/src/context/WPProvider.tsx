import React, { ReactNode } from 'react';
import WPContext from './WPContext';
import { UseSettings } from '../types';

interface ISettings {
  api: string;
  children: ReactNode;
}

export const WPProvider = ({ api, children }: ISettings) => {
  const contextValues: UseSettings = {
    api
  };

  return <WPContext.Provider value={contextValues}>{children}</WPContext.Provider>;
};
