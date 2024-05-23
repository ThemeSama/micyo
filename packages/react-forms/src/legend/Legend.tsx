import * as React from 'react';
import { ReactNode } from 'react';

interface ILegend {
  className?: string;
  children: ReactNode;
}

const Legend = ({ className, children, ...props }: ILegend) => {
  return (
    <legend className={`micyo-legend ${className}`} {...props}>
      {children}
    </legend>
  );
};

export default Legend;
