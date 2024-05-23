import * as React from 'react';
import { forwardRef } from 'react';
import Label from '../label/Label';
import Feedback from '../feedback/Feedback';
import useFieldId from '../hooks/useFieldId';
import FieldWrapper from '../wrapper/FieldWrapper';
import { TColSpan } from '../types';

export interface ICheckbox {
  id?: string;
  /** Checkbox or checbox group label */
  label?: string;
  name?: string;
  className?: string;
  /** Column size for responsive design */
  colSpan?: TColSpan;
  /** Enable/Disable feedback messages */
  feedback?: boolean;
  value?: any;
  /** Define checkbox group */
  list?: ICheckbox[];
}

/**
 * Single checkbox or group checkboxes
 */
const Checkbox = forwardRef<HTMLInputElement, ICheckbox>(
  ({ id, label, name, className, colSpan, feedback = true, list, ...props }, ref) => {
    const fieldId = useFieldId(id);

    if (Array.isArray(list) && list.length) {
      return (
        <FieldWrapper colSpan={colSpan} type="checkbox-group" className={className}>
          <Label label={label} name={name} />
          {list.map((radio) => (
            <Checkbox
              key={radio?.value}
              ref={ref}
              name={name}
              feedback={false}
              {...radio}
              {...props}
            />
          ))}
          {feedback && <Feedback name={name} />}
        </FieldWrapper>
      );
    }

    return (
      <FieldWrapper colSpan={colSpan} type="checkbox" className={className}>
        <input ref={ref} id={fieldId} name={name} type="checkbox" {...props} />
        <Label label={label} htmlFor={fieldId} />
        {feedback && <Feedback name={name} />}
      </FieldWrapper>
    );
  }
);

export default Checkbox;
