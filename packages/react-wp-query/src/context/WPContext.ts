import { createContext } from 'react';
import { UseWPContext } from '../types/extras';

const WPContext = createContext<UseWPContext>({} as UseWPContext);

export default WPContext;
