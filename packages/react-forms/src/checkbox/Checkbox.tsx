import * as React from 'react';
import { forwardRef } from 'react';
import Label from '../label/Label';
import Feedback from '../feedback/Feedback';
import useFieldId from '../hooks/useFieldId';
import FieldWrapper from '../wrapper/FieldWrapper';
import { BaseField, TColSpan } from '../types';

export interface ICheckbox extends BaseField {
  /** Enable/Disable feedback messages */
  feedback?: boolean;
  value?: any;
  /** Define checkbox group */
  list?: ICheckbox[];
}

/**
 * Checkboxes are used to let a user select one or more options of a limited number of choices.
 */
const Checkbox = forwardRef<HTMLInputElement, ICheckbox>(
  ({ id, label, name, className, colSpan, feedback = true, desc, list, ...props }, ref) => {
    const fieldId = useFieldId(id);

    if (Array.isArray(list) && list.length) {
      return (
        <FieldWrapper colSpan={colSpan} type="checkbox-group" className={className}>
          <Label label={label} name={name} />
          {list.map((radio) => (
            <Checkbox
              key={radio?.value}
              ref={ref}
              feedback={false}
              {...radio}
              {...props}
              name={name}
            />
          ))}
          {feedback && <Feedback name={name} desc={desc} />}
        </FieldWrapper>
      );
    }

    return (
      <FieldWrapper colSpan={colSpan} type="checkbox" className={className}>
        <input ref={ref} id={fieldId} name={name} type="checkbox" {...props} />
        <Label label={label} htmlFor={fieldId} />
        {feedback && <Feedback name={name} desc={desc} />}
      </FieldWrapper>
    );
  }
);

export default Checkbox;
