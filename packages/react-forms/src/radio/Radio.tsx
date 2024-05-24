import * as React from 'react';
import { forwardRef } from 'react';
import Label from '../label/Label';
import Feedback from '../feedback/Feedback';
import useFieldId from '../hooks/useFieldId';
import FieldWrapper from '../wrapper/FieldWrapper';
import { BaseField } from '../types';

export interface IRadio extends BaseField {
  /** Enable/Disable feedback details */
  feedback?: boolean;
  /** Field value */
  value?: any;
  /** Field's radio list */
  list?: IRadio[];
}

/**
 * The radio component are generally used in radio groups—collections of radio buttons describing a set of related options.
 */
const Radio = forwardRef<HTMLInputElement, IRadio>(
  ({ id, label, name, className, colSpan, feedback = true, list, ...props }, ref) => {
    const fieldId = useFieldId(id);

    if (Array.isArray(list) && list.length) {
      return (
        <FieldWrapper colSpan={colSpan} type="radio-group" className={className}>
          <Label label={label} name={name} />
          {list.map((radio) => (
            <Radio
              key={radio?.value}
              ref={ref}
              feedback={false}
              {...radio}
              name={name}
              {...props}
            />
          ))}
          {feedback && <Feedback name={name} />}
        </FieldWrapper>
      );
    }

    return (
      <FieldWrapper colSpan={colSpan} type="radio" className={className}>
        <input ref={ref} id={fieldId} name={name} type="radio" {...props} />
        <Label label={label} htmlFor={fieldId} />
        {feedback && <Feedback name={name} />}
      </FieldWrapper>
    );
  }
);

export default Radio;
