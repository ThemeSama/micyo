import * as React from 'react';
import { forwardRef } from 'react';
import Label from '../label/Label';
import Feedback from '../feedback/Feedback';
import useFieldId from '../hooks/useFieldId';
import FieldWrapper from '../wrapper/FieldWrapper';
import { BaseField } from '../types';

export interface ITextarea extends BaseField {}

/**
 * The Textarea component represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form.
 */
const Textarea = forwardRef<HTMLTextAreaElement, ITextarea>(
  ({ id, label, name, className, colSpan, desc, ...props }, ref) => {
    const fieldId = useFieldId(id);

    return (
      <FieldWrapper colSpan={colSpan} type="textarea" className={className}>
        <Label label={label} name={name} htmlFor={fieldId} />
        <textarea ref={ref} id={fieldId} name={name} {...props} />
        <Feedback name={name} desc={desc} />
      </FieldWrapper>
    );
  }
);

export default Textarea;
