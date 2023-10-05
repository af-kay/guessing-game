import { GuessCardState } from './guess-card/guess-card.types';
import { GUESSING_GAME_CONFIG } from './guessing-game.config';
import { GuessCardData } from './guessing-game.types';

const isValidCardsAmount = () => {
  const isEnoughToMakeOnePair =
    GUESSING_GAME_CONFIG.cardsAmount >= GUESSING_GAME_CONFIG.cardsForSingleGuess;
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

// NOTE: Modifies input array. Returns undefined if no elements in array
const popRandomFromArray = <T>(array: T[]): undefined | T => {
  if (!array.length) {
    return undefined;
  }

  const index = Math.floor(Math.random() * array.length);
  const randomItem = array[index];

  array.splice(index, 1);

  return randomItem;
};

const isNonNullable = <T>(o: null | T): o is T => {
  return o !== null;
};

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
    const randomIcon = popRandomFromArray(iconsHeap);
    const indexesToInsert = Array.from({
      length: GUESSING_GAME_CONFIG.cardsForSingleGuess,
    }).map(() => popRandomFromArray(freeCardSlotIndexes));

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
