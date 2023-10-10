import { useMemo } from 'react';

import { IconCardAnimationType } from '../../../../../components/icon-card';

import { GuessCardData, GuessCardState } from '../../../guessing-game.types';
import { useGuessingGame } from '../../../guessing-game.hook';

const getCardAnimation = (
  state: GuessCardState,
): undefined | IconCardAnimationType => {
  switch (state) {
    case GuessCardState.GUESSED:
      return 'shake';
    case GuessCardState.GUESSED_WRONG:
      return 'infinite-shake';
    default:
      return undefined;
  }
};

const useGuessingGameCard = (id: GuessCardData['id']) => {
  const {
    cards: { allCards },
  } = useGuessingGame();

  return allCards.find(c => c.id === id)!;
};

export const useGuessCard = (id: GuessCardData['id']) => {
  const {
    cards: { pickCard },
  } = useGuessingGame();
  const card = useGuessingGameCard(id);

  const isCardClosed = card.state === GuessCardState.CLOSED;

  const cardAnimation: undefined | IconCardAnimationType = useMemo(
    () => getCardAnimation(card.state),
    [card.state],
  );

  return {
    pickCard: () => pickCard(card.id),
    icon: card.icon,
    state: card.state,
    isCardClosed,
    cardAnimation,
  };
};
