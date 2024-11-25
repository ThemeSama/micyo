import { useContext } from 'react';
import { UseWPContext } from '../types/extras';
import WPContext from '../context/WPContext';

const useWPContext = (): UseWPContext => useContext(WPContext);

export default useWPContext;
