import * as React from 'react';
import usePost from '../../hooks/usePost';
import { TDateFormat } from '../../types/extras';
import useSettings from '../../hooks/useSettings';
import { formatDate } from 'date-fns';

interface IDate {
  format?: TDateFormat;
  className?: string;
}

const Date = ({ format, className = '' }: IDate) => {
  const { formatDate } = useSettings();
  const { date } = usePost();
  const formatFn = format ?? formatDate;

  return date ? (
    <time dateTime={date} className={`micyo-date-meta ${className}`}>
      {typeof formatFn === 'function' && date ? <>{formatFn(date)}</> : date}
    </time>
  ) : null;
};

export default Date;
