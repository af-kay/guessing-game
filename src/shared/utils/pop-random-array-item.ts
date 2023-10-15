export const popRandomArrayItem = <
  ItemType,
  NonNullableItemType = null extends ItemType ? never : ItemType,
>(
  array: NonNullableItemType[],
): null | NonNullableItemType => {
  if (!array.length) {
    return null;
  }

  const index = Math.floor(Math.random() * array.length);
  const randomItem = array[index];

  array.splice(index, 1);

  return randomItem;
};
