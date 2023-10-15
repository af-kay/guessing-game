import { GuessingGameCardGenerationConfig } from '../cards-generation.types';

import { isValidCardsAmount } from './cards-amount-validation.utils';

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

describe('isValidCardsAmount', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('indicates amount as valid if enough cards for single guess', () => {
    const config = makeConfig({ cardsAmount: 3, cardsForSingleGuess: 3 });

    expect(isValidCardsAmount(config)).toBe(true);
  });

  it('indicates amount as invalid if not enough cards for single guess', () => {
    const config = makeConfig({ cardsAmount: 2, cardsForSingleGuess: 3 });

    expect(isValidCardsAmount(config)).toBe(false);
  });

  it('indicates amount as invalid if no cards for single guess', () => {
    const config = makeConfig({ cardsAmount: 3, cardsForSingleGuess: 0 });

    expect(isValidCardsAmount(config)).toBe(false);
  });

  it('indicates amount as invalid if there is "floating" card(s)', () => {
    [
      makeConfig({ cardsAmount: 10, cardsForSingleGuess: 4 }),
      makeConfig({ cardsAmount: 10, cardsForSingleGuess: 3 }),
      makeConfig({ cardsAmount: 7, cardsForSingleGuess: 3 }),
    ].forEach(config => {
      expect(isValidCardsAmount(config)).toBe(false);
    });
  });

  it('indicates amount as valid if there is no "floating" card(s)', () => {
    [
      makeConfig({ cardsAmount: 12, cardsForSingleGuess: 4 }),
      makeConfig({ cardsAmount: 9, cardsForSingleGuess: 3 }),
      makeConfig({ cardsAmount: 12, cardsForSingleGuess: 3 }),
    ].forEach(config => {
      expect(isValidCardsAmount(config)).toBe(true);
    });
  });
});
