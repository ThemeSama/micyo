import * as React from 'react';
import { ReactNode, FormEventHandler } from 'react';
import { FormProvider } from './context/FormProvider';
import styled from 'styled-components';
import { gridTemplate } from '../helpers/grid';
import { TColumns } from '../types';
import { FieldValues, FormState } from 'react-hook-form';

export interface IForm<TFieldValues extends FieldValues = FieldValues> {
  onSubmit?: FormEventHandler;
  method?: 'post' | 'get';
  schema?: object;
  className?: string;
  columns?: TColumns;
  formState?: FormState<TFieldValues>;
  children: ReactNode;
}

const StyledForm = styled.form<{ $columns?: TColumns }>`
  ${(props) => gridTemplate(props?.$columns)}
`;

const Form = ({
  onSubmit,
  method = 'post',
  schema,
  className = '',
  columns,
  children,
  ...hookForm
}: IForm) => {
  const contextProps = { columns, schema, hookForm };

  return (
    <FormProvider {...contextProps}>
      <StyledForm
        noValidate
        onSubmit={onSubmit}
        method={method}
        className={`micyo-form ${className}`}
        $columns={columns}>
        {children}
      </StyledForm>
    </FormProvider>
  );
};

export default Form;
