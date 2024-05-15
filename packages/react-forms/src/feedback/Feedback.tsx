import * as React from 'react';
import useFormContext from '../form/hooks/useFormContext';
import { get } from 'react-hook-form';

interface IFeedback {
  name: string;
}

const Feedback = ({ name }: IFeedback) => {
  const formContext = useFormContext(),
    error = get(formContext?.formState?.errors, name);

  return error?.message ? <span>{error.message}</span> : null;
};

export default Feedback;
