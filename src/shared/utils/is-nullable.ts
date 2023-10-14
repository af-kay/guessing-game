export const isNullable = <T>(o: null | T): o is null => {
  return o === null;
};
