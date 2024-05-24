import * as React from 'react';
import { forwardRef, HTMLInputTypeAttribute } from 'react';
import Label from '../label/Label';
import Feedback from '../feedback/Feedback';
import useFieldId from '../hooks/useFieldId';
import FieldWrapper from '../wrapper/FieldWrapper';
import { BaseField } from '../types';

export interface IInput extends BaseField {
  /** Field datalist */
  datalist?: string;
  /** Field type */
  type?: HTMLInputTypeAttribute;
}

/**
 * Input component is used to create interactive controls for web-based forms in order to accept data from the user.
 * With the **colSpan** prop, you can adjust how many columns an field will occupy in responsive design.
 * It automatically displays validation warnings related to the corresponding field.
 */
const Input = forwardRef<HTMLInputElement, IInput>(
  ({ id, label, type = 'text', name, className, colSpan, desc, datalist, ...props }, ref) => {
    const fieldId = useFieldId(id);

    return (
      <FieldWrapper colSpan={colSpan} type={type} className={className}>
        <Label label={label} name={name} htmlFor={fieldId} />
        <input ref={ref} id={fieldId} name={name} type={type} list={datalist} {...props} />
        <Feedback name={name} desc={desc} />
      </FieldWrapper>
    );
  }
);

export default Input;
