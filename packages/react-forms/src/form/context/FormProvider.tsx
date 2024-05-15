'use client';
import * as React from 'react';
import FormContext from './FormContext';

interface IFormProvider {
  children: React.ReactNode;
}

export const FormProvider = ({ children, ...props }: IFormProvider) => {
  return <FormContext.Provider value={props}>{children}</FormContext.Provider>;
};
