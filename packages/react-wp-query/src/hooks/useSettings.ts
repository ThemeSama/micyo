import { useContext } from 'react';
import { UseSettings } from '../types/extras';
import WPContext from '../context/WPContext';

const useSettings = (): UseSettings => useContext(WPContext);

export default useSettings;
