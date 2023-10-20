export const getBooleanText = (value: boolean) => {
  if (value === true) {
    return 'TRUE';
  }
  return 'FALSE';
};

export const getBooleanColor = (value: boolean) => {
  if (value === true) {
    return 'lightgreen';
  }
  return 'red';
};
