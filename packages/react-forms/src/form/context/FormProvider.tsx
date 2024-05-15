'use client';
import * as React from 'react';
import FormContext from './FormContext';

interface IFormProvider {
  columns: Number;
  children: React.ReactNode;
}

export const FormProvider = ({ columns, children, ...props }: IFormProvider) => {
  const contextValue = {
    columns,
    ...props
  };
  return <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>;
};
