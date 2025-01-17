import { useQuery } from '@tanstack/react-query';
import { TSettings } from '../types';
import { AxiosResponse } from 'axios';
import apiFetch from '@wordpress/api-fetch';
import { isFetchResponse } from '../helpers/isFetchResponse';
import { useWPContext } from './useWPContext';

export const useSettings = () => {
  const { namespace } = useWPContext();

  const settings = useQuery({
    queryKey: ['settings'],
    queryFn: async ({ signal }): Promise<TSettings> => {
      const response: Response | AxiosResponse = await apiFetch({
        path: `${namespace}/settings`,
        signal,
        parse: false
      });

      // fetch api return
      if (isFetchResponse(response)) {
        return response.json();
      }

      // axios return
      return response?.data;
    }
  });

  return settings;
};
