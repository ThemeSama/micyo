import * as React from 'react';
import { useMemo } from 'react';
import useFormContext from '../form/hooks/useFormContext';
import { get } from 'react-hook-form';

interface ILabel {
  label?: string;
  name: string;
}

const Label = ({ label, name }: ILabel) => {
  const formContext = useFormContext();

  const isRequired = useMemo((): boolean => {
    const schema = formContext?.schema;

    // zod schema required control
    if (schema && get(schema?.shape, name) && !schema?.shape[name]?.isOptional()) {
      return true;
    }

    // yup schema required control
    if (schema && !get(schema?.fields, `${name}.spec.optional`, true)) {
      return true;
    }

    return false;
  }, [formContext?.schema]);

  return label ? (
    <label>
      {label}
      {isRequired && <span>*</span>}
    </label>
  ) : null;
};

export default Label;
