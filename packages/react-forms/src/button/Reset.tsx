import * as React from 'react';
import Button from './Button';
import useFormContext from '../form/hooks/useFormContext';

interface IReset {
  label?: string;
  onClick?: Function;
}

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
