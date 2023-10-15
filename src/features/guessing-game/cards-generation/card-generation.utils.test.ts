import { CardIconName } from '$components/icon-card';
import { PartialBy } from '$shared/types';

import { GuessingGameConfig } from '../guessing-game.types';

import { makeGuessingGameCards } from './cards-generation.utils';

const makeConfig = ({
  cardsAmount,
  cardsForSingleGuess,
  iconsToChooseFrom = Object.values(CardIconName).slice(0, 5),
}: PartialBy<
  Pick<
    GuessingGameConfig,
    'cardsAmount' | 'cardsForSingleGuess' | 'iconsToChooseFrom'
  >,
  'iconsToChooseFrom'
>) => ({
  cardsAmount,
  cardsForSingleGuess,
  iconsToChooseFrom,
});

describe('makeGuessingGameCards', () => {
  it('throws error with invalid inputs', () => {
    (
      [
        [
          makeConfig({
            cardsAmount: 3,
            cardsForSingleGuess: 0,
          }),
          'Invalid amount of cards to play guessing game!',
        ],
        [
          makeConfig({
            cardsAmount: 4,
            cardsForSingleGuess: 3,
          }),
          'Invalid amount of cards to play guessing game!',
        ],
        [
          makeConfig({
            cardsAmount: 10,
            cardsForSingleGuess: 2,
            iconsToChooseFrom: Object.values(CardIconName).slice(0, 4),
          }),
          'Not enough icons to choose from!',
        ],
      ] as const
    ).forEach(([config, error]) => {
      expect(() => makeGuessingGameCards(config)).toThrowError(error);
    });
  });

  it('makes exact requested amount of cards', () => {
    [
      makeConfig({
        cardsAmount: 3,
        cardsForSingleGuess: 3,
      }),
      makeConfig({
        cardsAmount: 4,
        cardsForSingleGuess: 2,
      }),
      makeConfig({
        cardsAmount: 10,
        cardsForSingleGuess: 5,
        iconsToChooseFrom: Object.values(CardIconName).slice(0, 4),
      }),
    ].forEach(config => {
      const cards = makeGuessingGameCards(config);

      expect(cards.length).toEqual(config.cardsAmount);
    });
  });
});
