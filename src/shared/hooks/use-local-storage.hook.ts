import { useCallback, useMemo } from 'react';

// TODO: tests
export const useLocalStorage = <ValueType extends string = string>(
  key: string,
) => {
  const initialLSValue = useMemo(
    () => <ValueType>localStorage.getItem(key),
    [key],
  );

  const updateLSValue = useCallback(
    (value: ValueType) => {
      localStorage.setItem(key, value);
    },
    [key],
  );

  return {
    initialLSValue,
    updateLSValue,
  };
};
