import { useEffect } from 'react';

import { useGuessingGame } from '$features/guessing-game/guessing-game.hook';
import { notify, shuffleArray } from '$shared/utils';

export const useCrazyModeSideEffects = (isEnabled: boolean) => {
  useShuffleCardsWhenHalfLeft__SideEffect(isEnabled);
};

const useShuffleCardsWhenHalfLeft__SideEffect = (isEnabled: boolean) => {
  const {
    cards: { nonGuessedCards, updateCards },
    config: {
      config: { cardsAmount, cardsForSingleGuess },
    },
  } = useGuessingGame();

  useEffect(() => {
    if (isEnabled) {
      const isMoreCardsThanForSingleGuess =
        nonGuessedCards.length > cardsForSingleGuess;
      const isHalfOrLessLeft = cardsAmount / 2 >= nonGuessedCards.length;

      if (isMoreCardsThanForSingleGuess && isHalfOrLessLeft) {
        const shuffledNonGuessedCardsIcons = shuffleArray(
          nonGuessedCards.map(c => c.icon),
        );

        updateCards(
          nonGuessedCards.map((card, index) => ({
            ...card,
            icon: shuffledNonGuessedCardsIcons[index],
          })),
        );
        notify('CrazyMode', 'Cards shuffled :) Have fun!');
      }
    }
    // No need to depend on nonGuessedCards directly because we're changing them here (no need to infinite loop)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    cardsAmount,
    cardsForSingleGuess,
    isEnabled,
    nonGuessedCards.length,
    updateCards,
  ]);
};
