import * as React from 'react';
import { ReactNode } from 'react';

export interface IOption {
  value: string;
  selected?: boolean;
  children?: ReactNode;
}

const Option = ({ children, ...props }: IOption) => {
  return <option {...props}>{children}</option>;
};

export default Option;
