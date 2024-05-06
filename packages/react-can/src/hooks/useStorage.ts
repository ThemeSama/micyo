import { useCallback } from 'react';
import { UseStorage } from '../types/Storage';

const useStorage = (): UseStorage => {
  const setItem = useCallback((key: string, item: any) => {
    try {
      window.localStorage.setItem(key, item);
    } catch (error) {
      console.warn(`Error setting localStorage key “${key}”:`, error);
    }
  }, []);

  const getItem = useCallback((key: string) => {
    try {
      const item = window.localStorage.getItem(key);

      return item;
    } catch (error) {
      console.warn(`Error getting localStorage key “${key}”:`, error);
    }
  }, []);

  const removeItem = useCallback((key: string) => {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.warn(`Error deleting localStorage key “${key}”:`, error);
    }
  }, []);

  return { setItem, getItem, removeItem };
};

export default useStorage;
