import { useMemo, useState } from 'react';

import {
  CardIconName,
  IconCardAnimationType,
} from '../../../components/icon-card/icon-card.types';
import { IconCard } from '../../../components/icon-card/icon-card.component';

import { GuessCardState } from './guess-card.types';
import { getCardColorFromState } from './guess-card.utils';

export const GuessCard = () => {
  const [cardState, setCardState] = useState(GuessCardState.CLOSED);

  const handleClick = () => {
    const nextStateConverter: Record<GuessCardState, GuessCardState> = {
      [GuessCardState.CLOSED]: GuessCardState.PICKED,
      [GuessCardState.PICKED]: GuessCardState.GUESSED,
      [GuessCardState.GUESSED]: GuessCardState.GUESSED_WRONG,
      [GuessCardState.GUESSED_WRONG]: GuessCardState.OPENED,
      [GuessCardState.OPENED]: GuessCardState.CLOSED,
    };

    const nextState = nextStateConverter[cardState];

    setCardState(nextState);
  };

  const isCardClosed = cardState === GuessCardState.CLOSED;

  const cardAnimation: undefined | IconCardAnimationType = useMemo(() => {
    switch (cardState) {
      case GuessCardState.GUESSED:
        return 'shake';
      case GuessCardState.GUESSED_WRONG:
        return 'infinite-shake';
      default:
        return undefined;
    }
  }, [cardState]);

  return (
    <IconCard
      iconName={CardIconName.LINUX}
      onClick={handleClick}
      isClosed={isCardClosed}
      bgColor={getCardColorFromState(cardState)}
      animation={cardAnimation}
      iconColor={'black'}
    />
  );
};
