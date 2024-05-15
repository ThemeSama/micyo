import * as React from 'react';
import Button from './Button';

interface ISubmit {
  label?: string;
}

const Submit = ({ label, ...props }: ISubmit) => {
  return <Button label={label} type="submit" {...props} />;
};

export default Submit;
