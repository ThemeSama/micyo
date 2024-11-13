import { createContext } from 'react';
import { UseSettings } from '../types/extras';

const WPContext = createContext<UseSettings>({} as UseSettings);

export default WPContext;
