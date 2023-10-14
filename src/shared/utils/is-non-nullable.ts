export const isNonNullable = <T>(o: null | T): o is T => {
  return o !== null;
};
