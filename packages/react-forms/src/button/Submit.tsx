import * as React from 'react';
import Button from './Button';

interface ISubmit {
  /** Button label */
  label?: string;
}

/**
 * Default HTML submit button with little customizations. Trigger with Form's onSubmit event.
 */
const Submit = ({ label, ...props }: ISubmit) => {
  return <Button label={label} type="submit" {...props} />;
};

export default Submit;
