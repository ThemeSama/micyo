import { createContext } from 'react';
import { UseFormReturn } from 'react-hook-form';

export interface IFormContext extends UseFormReturn {
  schema: any;
}

const FormContext = createContext<IFormContext>({} as IFormContext);

export default FormContext;
