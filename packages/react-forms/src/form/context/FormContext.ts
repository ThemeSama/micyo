import { createContext } from 'react';
import { UseFormReturn } from 'react-hook-form';

type TFormContext = {
  hookForm?: UseFormReturn;
  schema?: any;
  columns?: number;
};

const FormContext = createContext<TFormContext>({} as TFormContext);

export default FormContext;
