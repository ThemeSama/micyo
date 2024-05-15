import * as React from 'react';
import { ReactNode } from 'react';
import { FormProvider } from './context/FormProvider';

interface IForm {
  onSubmit?: React.FormEventHandler;
  method?: 'post' | 'get';
  schema?: object;
  columns: Number;
  children: ReactNode;
}

const Form = ({ onSubmit, method = 'post', schema, columns = 1, children, ...props }: IForm) => {
  const contextProps = { columns, schema, ...props };

  return (
    <form noValidate onSubmit={onSubmit} method={method}>
      <FormProvider {...contextProps}>{children}</FormProvider>
    </form>
  );
};

export default Form;
