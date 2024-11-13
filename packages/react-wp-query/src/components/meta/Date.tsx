import * as React from 'react';
import usePost from '../../hooks/usePost';

const Date = ({ format = (date: string) => date, className = '' }) => {
  const { date } = usePost();
  return date ? (
    <time dateTime={date} className={`micyo-date-meta ${className}`}>
      {format(date)}
    </time>
  ) : null;
};

export default Date;
