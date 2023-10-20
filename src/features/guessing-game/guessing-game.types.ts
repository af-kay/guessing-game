import { CardIconName } from '../../shared/components/icon-card';

import { IUseGameCards } from './game-cards';
import { IUseGameState } from './game-state';

export type GuessingGameConfig = {
  cardsForSingleGuess: number;
  cardsAmount: number;
  autoSolveLastGuess: boolean;
  wrongGuessDisplayMs: number;
  iconsToChooseFrom: Array<CardIconName>;
  initialGameState: GuessingGameSessionState;
  autoRestartOnFinish: boolean;
  autoRestartDelay: number;
  displayDebugStats: boolean;
};

export enum GuessingGameSessionState {
  NOT_STARTED = 'not_started',
  IN_PROGRESS = 'in_progress',
  PAUSED = 'paused',
  DONE = 'done',
}

export enum GuessCardState {
  CLOSED = 'closed',
  PICKED = 'picked',
  GUESSED = 'guessed',
  GUESSED_WRONG = 'guessed_wrong',
  SOLVED = 'solved',
}

export type GuessCardData = {
  id: number;
  icon: CardIconName;
  state: GuessCardState;
};

export type GuessingGameSession = {
  state: ReturnType<IUseGameState>;
  cards: ReturnType<IUseGameCards>;
};
