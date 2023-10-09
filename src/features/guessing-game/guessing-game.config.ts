import { CardIconName } from '../../components/icon-card';

export const GUESSING_GAME_CONFIG = {
  cardsForSingleGuess: 2,
  cardsAmount: 16,
  autoSolveLastGuess: true,
  wrongGuessDisplayMs: 700, // in ms
  iconsToChooseFrom: Object.values(CardIconName),
};
