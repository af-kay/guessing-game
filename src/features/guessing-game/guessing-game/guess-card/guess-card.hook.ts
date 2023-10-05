import { useMemo } from 'react';
import { IconCardAnimationType } from '../../../../components/icon-card/icon-card.types';
import { GuessCardData } from '../guessing-game.types';
import { GuessCardState } from './guess-card.types';
import { useGuessingGame, useGuessingGameCard } from '../guessing-game.context';

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

export const useGuessCard = (id: GuessCardData['id']) => {
  const { pickCardById } = useGuessingGame();
  const card = useGuessingGameCard(id);

  const pickCard = () => pickCardById(id);
  const isCardClosed = card.state === GuessCardState.CLOSED;

  const cardAnimation: undefined | IconCardAnimationType = useMemo(
    () => getCardAnimation(card.state),
    [card.state],
  );

  return {
    icon: card.icon,
    state: card.state,
    isCardClosed,
    pickCard,
    cardAnimation,
  };
};
