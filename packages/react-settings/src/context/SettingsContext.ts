import { createContext } from 'react';
import { UseSettings } from '../types/Settings';

const SettingsContext = createContext<UseSettings | undefined>(undefined);

export default SettingsContext;
