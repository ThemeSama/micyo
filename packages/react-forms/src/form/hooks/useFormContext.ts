import { useContext } from 'react';
import FormContext from '../context/FormContext';

const useFormContext = () => useContext(FormContext);

export default useFormContext;
