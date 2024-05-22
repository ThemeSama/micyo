import * as React from 'react';
import { ReactNode } from 'react';

export interface IOptionGroup {
  label: string;
  children?: ReactNode;
}

const OptionGroup = ({ label, children, ...props }: IOptionGroup) => {
  return (
    <optgroup label={label} {...props}>
      {children}
    </optgroup>
  );
};

export default OptionGroup;
