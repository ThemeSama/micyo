import * as React from 'react';
import { ReactNode, forwardRef } from 'react';
import useFieldId from '../hooks/useFieldId';
import FieldWrapper from '../wrapper/FieldWrapper';
import Label from '../label/Label';
import { IList } from '../datalist/Datalist';
import Option from '../option/Option';

interface ISelect {
  id?: string;
  label?: string;
  name: string;
  className?: string;
  colSpan?: number;
  desc?: string;
  options?: IList[];
  children?: ReactNode;
}

const Select = forwardRef<HTMLSelectElement, ISelect>(
  (
    { id, label, name, className, colSpan, desc, options = [], children, ...props }: ISelect,
    ref
  ) => {
    const fieldId = useFieldId(id);

    return (
      <FieldWrapper colSpan={colSpan} type="select" className={className}>
        <Label label={label} name={name} htmlFor={fieldId} />
        <select ref={ref} id={fieldId} name={name} {...props}>
          {children}
          {options.map(({ label, ...opt }) => (
            <Option {...opt}>{label}</Option>
          ))}
        </select>
      </FieldWrapper>
    );
  }
);

export default Select;
