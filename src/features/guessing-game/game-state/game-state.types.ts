export enum GuessingGameSessionState {
  NOT_STARTED = 'not_started',
  IN_PROGRESS = 'in_progress',
  PAUSED = 'paused',
  DONE = 'done',
}

export type UseGameState = (initialState: GuessingGameSessionState) => {
  isIdle: boolean;
  isRunning: boolean;
  isFinished: boolean;
  isPaused: boolean;
  //
  startGame: null | (() => void);
  resumeGame: null | (() => void);
  pauseGame: null | (() => void);
  finishGame: null | (() => void);
};
