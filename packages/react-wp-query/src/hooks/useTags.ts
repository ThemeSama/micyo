import { ITagsQueryResults, IQueryParams } from '../types';
import { useWPQuery } from './useWPQuery';

export const useTags = ({
  id,
  queryKey = ['tags'],
  enabled = true,
  queryArgs
}: IQueryParams<'tags'>): ITagsQueryResults => {
  const { list, single, headers, pagination } = useWPQuery({
    id,
    enabled,
    queryArgs,
    queryKey,
    type: 'tags'
  });

  return {
    id,
    tag: single,
    tags: list,
    headers,
    pagination
  };
};
