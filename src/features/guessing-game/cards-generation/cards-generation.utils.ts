import { GuessCardData, GuessCardState } from '../guessing-game.types';

import { isValidCardsAmount } from './cards-amount-validation';
import { isEnoughIconsForGame } from './icons-amount-validation';
import { GuessingGameCardGenerationConfig } from './card-generation.types';

import { isNonNullable, popRandomArrayItem } from '$shared/utils';

export const makeGuessingGameCards = (
  config: GuessingGameCardGenerationConfig,
): GuessCardData[] => {
  if (!isValidCardsAmount(config)) {
    throw new Error('Invalid amount of cards to play guessing game!');
  }
  if (!isEnoughIconsForGame(config)) {
    throw new Error('Not enough icons to choose from!');
  }

  const iconsHeap = [...config.iconsToChooseFrom];
  const cardsData: Array<null | GuessCardData> = Array.from({
    length: config.cardsAmount,
  }).map(() => null);
  const freeCardSlotIndexes = Array.from({
    length: config.cardsAmount,
  }).map((_, index) => index);

  let slotsLeft = freeCardSlotIndexes.length;
  let nextIconId = 1;

  while (slotsLeft) {
    const randomIcon = popRandomArrayItem(iconsHeap);
    const indexesToInsert = Array.from({
      length: config.cardsForSingleGuess,
    }).map(() => popRandomArrayItem(freeCardSlotIndexes));

    indexesToInsert.forEach(index => {
      const card: GuessCardData = {
        icon: randomIcon!,
        state: GuessCardState.CLOSED,
        id: nextIconId++,
      };

      cardsData[index!] = card;
    });

    slotsLeft -= config.cardsForSingleGuess;
  }

  return cardsData.filter(isNonNullable);
};
