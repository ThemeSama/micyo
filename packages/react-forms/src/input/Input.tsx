import * as React from 'react';
import { forwardRef, HTMLInputTypeAttribute } from 'react';
import Label from '../label/Label';
import useFormContext from '../form/hooks/useFormContext';
import Feedback from '../feedback/Feedback';

interface IInput {
  label?: string;
  name: string;
  type?: HTMLInputTypeAttribute;
}

const Input = forwardRef<HTMLInputElement, IInput>(
  ({ label, type = 'text', name, ...props }, ref) => {
    const formContext = useFormContext();

    return (
      <div>
        <Label label={label} name={name} />
        <input ref={ref} name={name} type={type} {...props} />
        <Feedback name={name} />
      </div>
    );
  }
);

export default Input;
