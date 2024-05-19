import * as React from 'react';
import useFormContext from '../form/hooks/useFormContext';
import { get } from 'react-hook-form';

interface IFeedback {
  name: string;
}

const Feedback = ({ name }: IFeedback) => {
  const formContext = useFormContext(),
    error = get(formContext?.hookForm?.formState?.errors, name);

  return error && error?.message ? (
    <span className="micyo-field-feedback">{error.message}</span>
  ) : null;
};

export default Feedback;
