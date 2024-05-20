import * as React from 'react';

type ButtonTypes = 'button' | 'submit' | 'reset';

interface IButton {
  label?: string;
  type: ButtonTypes;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
}

const Button = ({ label, type = 'button', onClick, className = '', ...props }: IButton) => {
  return (
    <button type={type} onClick={onClick} className={`micyo-btn ${className}`} {...props}>
      {label}
    </button>
  );
};

export default Button;
