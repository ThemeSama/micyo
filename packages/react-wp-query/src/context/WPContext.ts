import { createContext } from 'react';
import { UseSettings } from '../types';

const WPContext = createContext<UseSettings>({} as UseSettings);

export default WPContext;
