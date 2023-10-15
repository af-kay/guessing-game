export const isArrayOfSame = <T>(
  array: T[],
  mapFn: (item: T) => unknown = item => item,
) => array.every(item => mapFn(item) === mapFn(array[0]));
