import { GuessingGameCardGenerationConfig } from '../cards-generation.types';

import { isEnoughIconsForGame } from './icons-amount-validation.utils';

import { CardIconName } from '$components/icon-card';
import { PartialBy } from '$shared/types';


const makeConfig = ({
  cardsAmount,
  cardsForSingleGuess,
  iconsToChooseFrom = Object.values(CardIconName).slice(0, 5),
}: PartialBy<GuessingGameCardGenerationConfig, 'iconsToChooseFrom'>) => ({
  cardsAmount,
  cardsForSingleGuess,
  iconsToChooseFrom,
});

describe('isEnoughIconsForGame', () => {
  it('indicates as not enough if no cards for single guess', () => {
    const config = makeConfig({ cardsAmount: 3, cardsForSingleGuess: 0 });

    expect(isEnoughIconsForGame(config)).toBe(false);
  });

  it('indicates as not enough if not enough icons', () => {
    [
      makeConfig({
        cardsAmount: 10,
        cardsForSingleGuess: 2,
        iconsToChooseFrom: [],
      }),
      makeConfig({
        cardsAmount: 10,
        cardsForSingleGuess: 2,
        iconsToChooseFrom: Object.values(CardIconName).slice(0, 4),
      }),
      makeConfig({
        cardsAmount: 2,
        cardsForSingleGuess: 1,
        iconsToChooseFrom: Object.values(CardIconName).slice(0, 1),
      }),
    ].forEach(config => {
      expect(isEnoughIconsForGame(config)).toBe(false);
    });
  });

  it('indicates as enough if enough icons', () => {
    [
      makeConfig({
        cardsAmount: 10,
        cardsForSingleGuess: 2,
        iconsToChooseFrom: Object.values(CardIconName).slice(0, 5),
      }),
      makeConfig({
        cardsAmount: 3,
        cardsForSingleGuess: 3,
        iconsToChooseFrom: Object.values(CardIconName).slice(0, 3),
      }),
      makeConfig({
        cardsAmount: 2,
        cardsForSingleGuess: 1,
        iconsToChooseFrom: Object.values(CardIconName).slice(0, 2),
      }),
    ].forEach(config => {
      expect(isEnoughIconsForGame(config)).toBe(true);
    });
  });
})