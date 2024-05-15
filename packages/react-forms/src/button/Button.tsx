import * as React from 'react';

type ButtonTypes = 'button' | 'submit' | 'reset';

interface IButton {
  label?: string;
  type: ButtonTypes;
}

const Button = ({ label, type = 'button', ...props }: IButton) => {
  return (
    <button type={type} {...props}>
      {label}
    </button>
  );
};

export default Button;
