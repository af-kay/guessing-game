import { GuessingGameSessionState } from '../game-state';

import { CardIconName } from '$shared/components';

export type GuessingGameConfig = {
  cardsForSingleGuess: number;
  cardsAmount: number;
  autoSolveLastGuess: boolean;
  maxColumns: number;
  crazyMode: boolean;
  wrongGuessDisplayMs: number;
  iconsToChooseFrom: Array<CardIconName>;
  initialGameState: GuessingGameSessionState;
  autoRestartOnFinish: boolean;
  autoRestartDelay: number;
  displayDebugStats: boolean;
};

export type UseGameConfig = () => {
  updateConfigWith: (updates: Partial<GuessingGameConfig>) => void;
  config: GuessingGameConfig;
};

export type IGameConfigMenu = {
  additionalButtons?: React.ReactElement[];
};
