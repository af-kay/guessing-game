export const devProtected = <T, NonNullT = null extends T ? never : T>(
  something: NonNullT,
): NonNullT | null => {
  if (IS_DEV_MODE) {
    return something;
  }

  return null;
};

export const devProtectedFC = <
  PropsType,
  FCType extends React.FC<PropsType> = React.FC<PropsType>,
>(
  fc: FCType,
) => {
  if (IS_DEV_MODE) {
    return fc;
  }

  return (_: PropsType) => {
    return null;
  };
};
