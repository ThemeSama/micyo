import * as React from 'react';
import useFormContext from '../form/hooks/useFormContext';
import { get } from 'react-hook-form';

interface IFeedback {
  name?: string;
  desc?: string;
}

const Feedback = ({ name, desc }: IFeedback) => {
  const formContext = useFormContext(),
    error = get(formContext?.hookForm?.formState?.errors, name);

  return (
    <>
      {error && error?.message ? (
        <span className="micyo-field-validation-feedback">{error.message}</span>
      ) : (
        <span className="micyo-field-feedback">{desc}</span>
      )}
    </>
  );
};

export default Feedback;
