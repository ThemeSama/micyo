import { createContext } from 'react';
import { UseWPContext } from '../types';

export const WPContext = createContext<UseWPContext>({} as UseWPContext);
