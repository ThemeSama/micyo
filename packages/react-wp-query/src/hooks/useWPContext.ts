import { useContext } from 'react';
import { UseWPContext } from '../types';
import { WPContext } from '../context';

export const useWPContext = (): UseWPContext => useContext(WPContext);
