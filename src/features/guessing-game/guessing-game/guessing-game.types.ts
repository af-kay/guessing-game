import { CardIconName } from '../../../components/icon-card/icon-card.types';
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
  gameState: GuessingGameSessionState;
  gameCards: GuessCardData[];
  startGame: () => void;
  pickCardById: (id: GuessCardData['id']) => void;
};
