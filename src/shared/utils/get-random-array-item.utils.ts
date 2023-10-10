export const getRandomArrayItem = <T>(array: T[]): null | T => {
  if (!array.length) {
    return null;
  }

  const index = Math.floor(Math.random() * array.length);
  const randomItem = array[index];

  return randomItem;
};
