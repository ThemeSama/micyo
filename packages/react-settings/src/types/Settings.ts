import { ReactNode } from 'react';

export type SettingsProviderProps = {
  /** Content */
  children: ReactNode;
};

export interface Setting {
  id: string;
  value: any;
}

export interface UseSettings {
  settings: Array<Setting>;
  setSettings: Function;
  addSetting: Function;
  getSetting: Function;
}
