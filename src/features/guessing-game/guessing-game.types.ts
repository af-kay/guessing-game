import { CardIconName } from '../../shared/components/icon-card';

import { UseGameCards } from './game-cards';
import { UseGameState } from './game-state';

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
  state: ReturnType<UseGameState>;
  cards: ReturnType<UseGameCards>;
};
