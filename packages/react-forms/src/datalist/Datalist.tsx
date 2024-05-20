import * as React from 'react';
import { forwardRef, HTMLInputTypeAttribute } from 'react';
import useFieldId from '../hooks/useFieldId';
import Input from '../input/Input';

interface IList {
  value: string;
  selected?: boolean;
  text?: string;
}

export interface IDatalist {
  id?: string;
  label?: string;
  name: string;
  className?: string;
  colSpan?: number;
  desc?: string;
  list: IList[];
  type?: HTMLInputTypeAttribute;
}

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
          list={listId}
          {...props}
          ref={ref}
        />
        <datalist id={listId}>
          {list.map(({ text, ...opt }) => (
            <option {...opt}>{text}</option>
          ))}
        </datalist>
      </>
    );
  }
);

export default Datalist;
