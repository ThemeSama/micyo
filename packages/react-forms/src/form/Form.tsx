import * as React from 'react';
import { ReactNode } from 'react';
import { FormProvider } from './context/FormProvider';

interface IForm {
  onSubmit?: React.FormEventHandler;
  method?: 'post' | 'get';
  schema?: object;
  columns?: number;
  children: ReactNode;
}

const Form = ({ onSubmit, method = 'post', schema, columns = 1, children, ...hookForm }: IForm) => {
  const contextProps = { columns, schema, hookForm };

  return (
    <form noValidate onSubmit={onSubmit} method={method}>
      <FormProvider {...contextProps}>{children}</FormProvider>
    </form>
  );
};

export default Form;
