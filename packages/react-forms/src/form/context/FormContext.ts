import { createContext } from 'react';
import { FieldValues, FormState, UseFormReturn } from 'react-hook-form';

type TFormContext<TUseFormReturn extends UseFormReturn = UseFormReturn> = {
  hookForm?: TUseFormReturn;
  schema?: any;
  columns?: number;
};

const FormContext = createContext<TFormContext>({} as TFormContext);

export default FormContext;
