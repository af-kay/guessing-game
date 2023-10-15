import { GuessingGameConfig } from '../guessing-game.types';

export type GuessingGameCardGenerationConfig = Pick<
  GuessingGameConfig,
  'iconsToChooseFrom' | 'cardsAmount' | 'cardsForSingleGuess'
>;
