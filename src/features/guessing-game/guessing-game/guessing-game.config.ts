import { CardIconName } from '../../../components/icon-card/icon-card.types';

export const GUESSING_GAME_CONFIG = {
  cardsForSingleIcon: 2, // or for one guess
  cardsAmount: 16,
  wrongGuessDisplayMs: 700, // in ms
  iconsToChooseFrom: Object.values(CardIconName),
};
