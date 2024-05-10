'use client';
import { useCallback, useState } from 'react';
import { Setting, SettingsProviderProps, UseSettings } from '../types/Settings';
import SettingsContext from './SettingsContext';

export const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const [settings, setSettings] = useState<Array<Setting> | []>([]);

  const addSetting = useCallback(
    (id: string, value: any) => {
      setSettings((currentSettings) => [...currentSettings, { id, value }]);
    },
    [setSettings]
  );

  const getSetting = useCallback(
    (id: string, defaultValue: any) => {
      const setting = settings.find((setting: Setting) => setting.id === id);

      return setting?.value || defaultValue;
    },
    [settings]
  );

  const contextValues: UseSettings = { settings, setSettings, addSetting, getSetting };

  return <SettingsContext.Provider value={contextValues}>{children}</SettingsContext.Provider>;
};
