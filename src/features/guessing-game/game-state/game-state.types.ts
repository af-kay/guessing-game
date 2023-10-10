import { GuessingGameSessionState } from '../guessing-game.types';

export type IUseGameState = (initialState: GuessingGameSessionState) => {
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
