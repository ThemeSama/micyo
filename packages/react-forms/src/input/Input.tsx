import * as React from 'react';
import { forwardRef, HTMLInputTypeAttribute } from 'react';
import Label from '../label/Label';
import Feedback from '../feedback/Feedback';
import useFieldId from '../hooks/useFieldId';
import FieldWrapper from '../wrapper/FieldWrapper';

export interface IInput {
  id?: string;
  label?: string;
  name: string;
  className?: string;
  colSpan?: number;
  type?: HTMLInputTypeAttribute;
}

const Input = forwardRef<HTMLInputElement, IInput>(
  ({ id, label, type = 'text', name, className, colSpan, ...props }, ref) => {
    const fieldId = useFieldId(id);

    return (
      <FieldWrapper colSpan={colSpan} type={type} className={className}>
        <Label label={label} name={name} htmlFor={fieldId} />
        <input ref={ref} id={fieldId} name={name} type={type} {...props} />
        <Feedback name={name} />
      </FieldWrapper>
    );
  }
);

export default Input;
