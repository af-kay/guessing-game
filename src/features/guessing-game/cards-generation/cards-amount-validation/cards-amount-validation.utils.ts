import { GuessingGameCardGenerationConfig } from '../card-generation.types';

export const isValidCardsAmount = ({
  cardsAmount,
  cardsForSingleGuess,
}: Pick<
  GuessingGameCardGenerationConfig,
  'cardsAmount' | 'cardsForSingleGuess'
>) => {
  const isEnoughToMakeOnePair =
    cardsForSingleGuess > 0 && cardsAmount >= cardsForSingleGuess;
  const isPairAmount = cardsAmount % cardsForSingleGuess === 0;

  return isEnoughToMakeOnePair && isPairAmount;
};
