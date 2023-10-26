import { Theme } from '$shared/types';

export type IBoard = React.PropsWithChildren<{
  maxColumns: number;
  colors?: Theme['BOARD'];
}>;
