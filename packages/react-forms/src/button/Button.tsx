import * as React from 'react';

type ButtonTypes = 'button' | 'submit' | 'reset';

interface IButton {
  label?: string;
  type: ButtonTypes;
  className?: string;
}

const Button = ({ label, type = 'button', className = '', ...props }: IButton) => {
  return (
    <button type={type} className={`micyo-btn ${className}`} {...props}>
      {label}
    </button>
  );
};

export default Button;
