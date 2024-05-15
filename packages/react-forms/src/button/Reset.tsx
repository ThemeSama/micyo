import * as React from 'react';
import Button from './Button';

interface IReset {
  label?: string;
}

const Reset = ({ label, ...props }: IReset) => {
  return <Button label={label} type="reset" {...props} />;
};

export default Reset;
