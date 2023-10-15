import { CardIconName } from '../../components/icon-card';

import {
  GuessingGameConfig,
  GuessingGameSessionState,
} from './guessing-game.types';

export const GUESSING_GAME_CONFIG: GuessingGameConfig = {
  cardsForSingleGuess: 2,
  cardsAmount: 16,
  autoSolveLastGuess: true,
  wrongGuessDisplayMs: 700,
  iconsToChooseFrom: Object.values(CardIconName),
  initialGameState: GuessingGameSessionState.NOT_STARTED,
  displayDebugStats: false, // TODO: always disabled in prod mode
};
