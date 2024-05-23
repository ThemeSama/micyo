import * as React from 'react';
import Button from './Button';
import useFormContext from '../form/hooks/useFormContext';

interface IReset {
  /** Button label */
  label?: string;
  /** Click event */
  onClick?: Function;
}

/**
 * Default HTML reset button with little customizations. Reset entire form to default values. It automatically triggers the react-hook-form reset method.
 */
const Reset = ({ label, onClick, ...props }: IReset) => {
  const formContext = useFormContext();

  return (
    <Button
      label={label}
      type="reset"
      onClick={(event) => {
        event.preventDefault();
        if (onClick) {
          onClick(event);
        }
        formContext?.hookForm?.reset();
      }}
      {...props}
    />
  );
};

export default Reset;
