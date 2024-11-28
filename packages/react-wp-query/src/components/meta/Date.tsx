import * as React from 'react';
import { useMemo } from 'react';
import usePost from '../../hooks/usePost';
import { TDateFormat } from '../../types/extras';
import useWPContext from '../../hooks/useWPContext';

interface IDate {
  format?: TDateFormat;
  className?: string;
}

const Date = ({ format, className = '' }: IDate) => {
  const { formatDate } = useWPContext();
  const { date } = usePost();
  const formatFn = format ?? formatDate;

  const postDate: string = useMemo(() => {
    if (typeof format === 'function' && date) {
      return format(date).toString();
    } else if (typeof formatDate === 'function' && date) {
      return formatDate(date).toString();
    } else if (date) {
      return date;
    }

    return '';
  }, [date, format, formatDate]);

  return postDate && date ? (
    <time dateTime={date} className={`micyo-date-meta ${className}`}>
      {postDate}
    </time>
  ) : null;
};

export default Date;
