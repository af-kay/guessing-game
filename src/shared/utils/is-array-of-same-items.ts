export const isArrayOfSameItems = (array: unknown[]) =>
  array.every(item => item === array[0]);
