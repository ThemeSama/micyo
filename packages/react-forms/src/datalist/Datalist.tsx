import * as React from 'react';
import { forwardRef, HTMLInputTypeAttribute } from 'react';
import useFieldId from '../hooks/useFieldId';
import Input from '../input/Input';
import Option from '../option/Option';
import { BaseField } from '../types';

export interface IList {
  label?: string;
  value?: string;
  selected?: boolean;
  text?: string;
  options?: IList[];
}

export interface IDatalist extends BaseField {
  list: IList[];
  type?: HTMLInputTypeAttribute;
}

/**
 * Datalist component contains a set of options that represent the permissible or recommended options available to choose from within other controls.
 * With the **colSpan** prop, you can adjust how many columns an field will occupy in responsive design. It automatically displays validation warnings related to the corresponding field.
 */
const Datalist = forwardRef<HTMLInputElement, IDatalist>(
  ({ id, label, type = 'text', name, className, colSpan, desc, list, ...props }, ref) => {
    const fieldId = useFieldId(id),
      listId = React.useId();

    return (
      <>
        <Input
          id={fieldId}
          label={label}
          type={type}
          name={name}
          className={className}
          colSpan={colSpan}
          desc={desc}
          datalist={listId}
          {...props}
          ref={ref}
        />
        <datalist id={listId}>
          {list.map(({ text, ...opt }) => (
            <Option {...opt}>{text}</Option>
          ))}
        </datalist>
      </>
    );
  }
);

export default Datalist;
