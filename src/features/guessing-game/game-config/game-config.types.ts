import { GuessingGameSessionState } from '../game-state';

import { CardIconName } from '$shared/components';

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

export type UseGameConfig = () => GuessingGameConfig;