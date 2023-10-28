import { Theme } from '$shared/types';

export type IBoard = React.PropsWithChildren<{
  maxColumns: number;
  isDisabled: boolean;
  colors?: Theme['BOARD'];
}>;
