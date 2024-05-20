import { useId } from 'react';

const useFieldId = (id: string | undefined) => {
  const fieldId = useId();

  return id || fieldId;
};

export default useFieldId;
