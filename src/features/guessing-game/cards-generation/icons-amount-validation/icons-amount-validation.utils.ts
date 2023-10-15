import { GuessingGameCardGenerationConfig } from '../cards-generation.types';

export const isEnoughIconsForGame = ({
  cardsAmount,
  cardsForSingleGuess,
  iconsToChooseFrom,
}: GuessingGameCardGenerationConfig) =>
  Boolean(
    cardsForSingleGuess > 0 &&
      iconsToChooseFrom.length >= cardsAmount / cardsForSingleGuess,
  );
