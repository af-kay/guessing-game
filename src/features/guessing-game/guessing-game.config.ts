import { CardIconName } from '../../components/icon-card';

import {
  GuessingGameConfig,
  GuessingGameSessionState,
} from './guessing-game.types';

export const GUESSING_GAME_CONFIG: GuessingGameConfig = {
  cardsForSingleGuess: 2,
  cardsAmount: 28,
  autoSolveLastGuess: true,
  wrongGuessDisplayMs: 700,
  iconsToChooseFrom: Object.values(CardIconName),
  initialGameState: GuessingGameSessionState.NOT_STARTED,
  autoRestartOnFinish: true,
  autoRestartDelay: 2500,
  displayDebugStats: false, // TODO: always disabled in prod mode
};
