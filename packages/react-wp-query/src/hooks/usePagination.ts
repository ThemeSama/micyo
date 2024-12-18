import { useMemo, useState } from 'react';
import { IPaginationResults, TPagination, TResponseHeaders } from '../types';

export const usePagination = (page: number | undefined): IPaginationResults => {
  const [headers, setHeaders] = useState<TResponseHeaders>();

  const pagination: TPagination = useMemo(() => {
    let total: number = 1,
      pages: number = 1;

    if (
      headers &&
      typeof headers?.get === 'function' &&
      headers.get('x-wp-total') &&
      headers.get('x-wp-totalpages')
    ) {
      total = headers.get('x-wp-total') !== null ? Number(headers.get('x-wp-total')) : 1;
      pages = headers.get('x-wp-totalpages') !== null ? Number(headers.get('x-wp-totalpages')) : 1;
    }

    return {
      pages,
      total,
      hasNext: page ? pages > page : false,
      hasPrev: page ? page > 1 : false
    };
  }, [headers, page]);

  return { pagination, headers, setHeaders };
};
