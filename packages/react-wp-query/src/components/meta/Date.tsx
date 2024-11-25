import * as React from 'react';
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

  return date ? (
    <time dateTime={date} className={`micyo-date-meta ${className}`}>
      {typeof formatFn === 'function' && date ? <>{formatFn(date)}</> : date}
    </time>
  ) : null;
};

export default Date;
