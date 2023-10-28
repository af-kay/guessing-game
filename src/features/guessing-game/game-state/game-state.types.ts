export enum GuessingGameSessionState {
  NOT_STARTED = 'not_started',
  IN_PROGRESS = 'in_progress',
  ABOUT_TO_RESTART = 'about_to_restart',
  PAUSED = 'paused',
  DONE = 'done',
}

export type UseGameState = (initialState: GuessingGameSessionState) => {
  isIdle: boolean;
  isRunning: boolean;
  isAboutToRestart: boolean;
  isFinished: boolean;
  isPaused: boolean;
  //
  startGame: null | (() => void);
  resumeGame: null | (() => void);
  pauseGame: null | (() => void);
  finishGame: null | (() => void);
  prepareToRestart: null | (() => void);
};
