import { GUESSING_GAME_CONFIG } from '../guessing-game.config';
import { GuessCardData, GuessCardState } from '../guessing-game.types';

import { isNonNullable, popRandomArrayItem } from '$shared/utils';

const isValidCardsAmount = () => {
  const isEnoughToMakeOnePair =
    GUESSING_GAME_CONFIG.cardsAmount >=
    GUESSING_GAME_CONFIG.cardsForSingleGuess;
  const isPairAmount =
    GUESSING_GAME_CONFIG.cardsAmount %
      GUESSING_GAME_CONFIG.cardsForSingleGuess ===
    0;

  return isEnoughToMakeOnePair && isPairAmount;
};

const isEnoughIconsForGame = () =>
  Boolean(
    GUESSING_GAME_CONFIG.iconsToChooseFrom.length >=
      GUESSING_GAME_CONFIG.cardsAmount /
        GUESSING_GAME_CONFIG.cardsForSingleGuess,
  );

export const makeGuessingGameCards = (): GuessCardData[] => {
  if (!isValidCardsAmount()) {
    throw new Error('Invalid amount of cards to play guessing game!');
  }
  if (!isEnoughIconsForGame()) {
    throw new Error('Not enough icons to choose from!');
  }

  const iconsHeap = [...GUESSING_GAME_CONFIG.iconsToChooseFrom];
  const cardsData: Array<null | GuessCardData> = Array.from({
    length: GUESSING_GAME_CONFIG.cardsAmount,
  }).map(() => null);
  const freeCardSlotIndexes = Array.from({
    length: GUESSING_GAME_CONFIG.cardsAmount,
  }).map((_, index) => index);

  let slotsLeft = freeCardSlotIndexes.length;
  let nextIconId = 1;

  while (slotsLeft) {
    const randomIcon = popRandomArrayItem(iconsHeap);
    const indexesToInsert = Array.from({
      length: GUESSING_GAME_CONFIG.cardsForSingleGuess,
    }).map(() => popRandomArrayItem(freeCardSlotIndexes));

    indexesToInsert.forEach(index => {
      const card: GuessCardData = {
        icon: randomIcon!,
        state: GuessCardState.CLOSED,
        id: nextIconId++,
      };

      cardsData[index!] = card;
    });

    slotsLeft -= GUESSING_GAME_CONFIG.cardsForSingleGuess;
  }

  return cardsData.filter(isNonNullable);
};
