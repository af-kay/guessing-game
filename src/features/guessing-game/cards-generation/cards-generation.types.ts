import { GuessingGameConfig } from '../game-config';

export type GuessingGameCardGenerationConfig = Pick<
  GuessingGameConfig,
  'iconsToChooseFrom' | 'cardsAmount' | 'cardsForSingleGuess'
>;
