import { useMemo } from 'react';
import { IconCardAnimationType } from '../../../../components/icon-card/icon-card.types';
import { useGuessingGame } from '../guessing-game.hook';
import { GuessCardData } from '../guessing-game.types';
import { GuessCardState } from './guess-card.types';

export const useGuessCard = (id: GuessCardData['id']) => {
  const { gameCards } = useGuessingGame();

  const card = gameCards.find(c => c.id === id)!;

  const handleClick = () => {
    const nextStateConverter: Record<GuessCardState, GuessCardState> = {
      [GuessCardState.CLOSED]: GuessCardState.PICKED,
      [GuessCardState.PICKED]: GuessCardState.GUESSED,
      [GuessCardState.GUESSED]: GuessCardState.GUESSED_WRONG,
      [GuessCardState.GUESSED_WRONG]: GuessCardState.SOLVED,
      [GuessCardState.SOLVED]: GuessCardState.CLOSED,
    };

    const nextState = nextStateConverter[card.state];

    // setCardState(nextState);
  };

  const isCardClosed = card.state === GuessCardState.CLOSED;

  const cardAnimation: undefined | IconCardAnimationType = useMemo(() => {
    switch (card.state) {
      case GuessCardState.GUESSED:
        return 'shake';
      case GuessCardState.GUESSED_WRONG:
        return 'infinite-shake';
      default:
        return undefined;
    }
  }, [card.state]);

  return {
    icon: card.icon,
    state: card.state,
    isCardClosed,
    cardAnimation,
    handleClick,
  };
};
