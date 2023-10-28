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

export const createFeatureFlagProtectedFC =
  <
    PropsType,
    ConfigType extends Record<string, boolean>,
    FCType extends React.FC<PropsType> = React.FC<PropsType>,
  >(
    config: ConfigType,
  ) =>
  (featureFlag: keyof ConfigType, fc: FCType) => {
    if (config[featureFlag] === true) {
      return fc;
    }

    return (_: PropsType) => {
      return null;
    };
  };
