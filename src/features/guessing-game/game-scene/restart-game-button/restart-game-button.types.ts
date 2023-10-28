export type IRestartGameButton = Record<string, never>;

export type UseRestartGameButton = () => {
  isDisabled: boolean;
  isLoading: boolean;
  text: string;
  restartGame: undefined | (() => void);
};
