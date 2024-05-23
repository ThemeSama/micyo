import * as React from 'react';

type ButtonTypes = 'button' | 'submit' | 'reset';

interface IButton {
  /** Button label */
  label?: string;
  /** Button type */
  type: ButtonTypes;
  /** Button click event */
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  /** Button extra class */
  className?: string;
}

/**
 * Default HTML button with little customizations
 */
const Button = ({ label, type = 'button', onClick, className = '', ...props }: IButton) => {
  return (
    <button type={type} onClick={onClick} className={`micyo-btn ${className}`} {...props}>
      {label}
    </button>
  );
};

export default Button;
