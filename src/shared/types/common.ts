export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type OptionType<ValueType = string> = {
  label: string;
  value: ValueType;
};

export type Theme = {
  BOARD: {
    BG?: string | [string, string];
  };
  ICON_CARD: {
    CLOSED?: string;
  };
};
