import { CardIconName } from '../../shared/components/icon-card';

import { UseGameCards } from './game-cards';
import { UseGameConfig } from './game-config';
import { IGameConfigMenu } from './game-config/game-config.types';
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
  config: ReturnType<UseGameConfig>;
};

export type IGuessingGame = Pick<IGameConfigMenu, 'additionalButtons'>;
