import { CardIconName } from '../../components/icon-card';
import { IUseGameCards } from './game-cards';
import { IUseGameState } from './game-state';

import { GuessCardState } from './guess-card/guess-card.types';

export enum GuessingGameSessionState {
  NOT_STARTED = 'not_started',
  IN_PROGRESS = 'in_progress',
  PAUSED = 'paused',
  DONE = 'done',
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
