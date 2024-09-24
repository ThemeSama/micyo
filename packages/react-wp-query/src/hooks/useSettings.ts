import { useContext } from 'react';
import { UseSettings } from '../types';
import WPContext from '../context/WPContext';

const useSettings = (): UseSettings => useContext(WPContext);

export default useSettings;
