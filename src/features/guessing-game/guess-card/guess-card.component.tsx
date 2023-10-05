import { useState } from 'react';

import { CardIcon, CardState } from '../../../components/icon-card/icon-card.types';
import { IconCard } from '../../../components/icon-card/icon-card.component';

export const GuessCard = () => {
  const [cardState, setCardState] = useState(CardState.CLOSED);

  const handleClick = () => {
    const nextStateConverter: Record<CardState, CardState> = {
      [CardState.CLOSED]: CardState.PICKED,
      [CardState.PICKED]: CardState.GUESSED,
      [CardState.GUESSED]: CardState.OPENED,
      [CardState.GUESSED_WRONG]: CardState.CLOSED,
      [CardState.OPENED]: CardState.CLOSED,
    };

    const nextState = nextStateConverter[cardState];

    setCardState(nextState);
  };

  return (
    <IconCard icon={CardIcon.LINUX} state={cardState} onClick={handleClick} />
  );
};
