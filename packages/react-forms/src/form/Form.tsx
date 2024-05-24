import * as React from 'react';
import { ReactNode, FormEventHandler } from 'react';
import { FormProvider } from './context/FormProvider';
import styled from 'styled-components';
import { gridTemplate } from '../helpers/grid';
import { TColumns } from '../types';
import { FieldValues } from 'react-hook-form';

export interface IForm<TFieldValues extends FieldValues = FieldValues> {
  /** Form submit event */
  onSubmit?: FormEventHandler;
  /** Form method */
  method?: 'post' | 'get';
  /** Form's object schema */
  schema?: object;
  /** Extra CSS selector */
  className?: string;
  /** Form's global columns settings */
  columns?: TColumns;
  /** Form content */
  children: ReactNode;
}

const StyledForm = styled.form<{ $columns?: TColumns }>`
  ${(props) => gridTemplate(props?.$columns)}
`;

/**
 * The Form component represents a document section containing interactive controls for submitting information.
 * Share form context with sub fields, global schema validations and columns configurations
 */
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
