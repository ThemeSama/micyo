import * as React from 'react';
import { ReactNode, forwardRef } from 'react';
import useFieldId from '../hooks/useFieldId';
import FieldWrapper from '../wrapper/FieldWrapper';
import Label from '../label/Label';
import { IList } from '../datalist/Datalist';
import Option from '../option/Option';
import OptionGroup from '../option/OptionGroup';
import Feedback from '../feedback/Feedback';
import { BaseField } from '../types';

interface ISelect extends BaseField {
  multiple?: boolean;
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
          {options.map(({ label = '', options: list = [], ...opt }) => (
            <>
              {list.length ? (
                <OptionGroup label={label} {...opt}>
                  {list.map(({ label, ...opt2 }) => (
                    <Option {...opt2}>{label}</Option>
                  ))}
                </OptionGroup>
              ) : (
                <Option {...opt}>{label}</Option>
              )}
            </>
          ))}
        </select>
        <Feedback name={name} desc={desc} />
      </FieldWrapper>
    );
  }
);

export default Select;
