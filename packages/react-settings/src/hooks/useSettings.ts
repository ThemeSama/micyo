import { useContext } from 'react';
import SettingsContext from '../context/SettingsContext';
import { UseSettings } from '../types/Settings';

/**
 * Settings Service - Add, get, modify, clear for project global settings
 * @returns UseSettings - Settings context
 */
const useSettings = (): UseSettings => useContext(SettingsContext);

export default useSettings;
