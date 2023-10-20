import { GuessingGameSessionState } from '../game-state';

import type { GuessingGameConfig } from './game-config.types';

import { CardIconName } from '$shared/components/icon-card';

export const DEFAULT_GUESSING_GAME_CONFIG: GuessingGameConfig = {
  cardsForSingleGuess: 2,
  cardsAmount: 16,
  autoSolveLastGuess: true,
  maxColumns: 4,
  wrongGuessDisplayMs: 700,
  iconsToChooseFrom: Object.values(CardIconName),
  initialGameState: GuessingGameSessionState.NOT_STARTED,
  autoRestartOnFinish: true,
  autoRestartDelay: 2500,
  displayDebugStats: false, // TODO: always disabled in prod mode
};
