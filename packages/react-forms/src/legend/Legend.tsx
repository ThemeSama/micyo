import * as React from 'react';
import { ReactNode } from 'react';

interface ILegend {
  children: ReactNode;
}

const Legend = ({ children, ...props }: ILegend) => {
  return <legend {...props}>{children}</legend>;
};

export default Legend;
