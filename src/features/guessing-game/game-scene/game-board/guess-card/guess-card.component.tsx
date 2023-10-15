
import { IIGuessCard } from './guess-card.types';
import {
  getCardColorFromState,
  getHighlightColorFromState,
} from './guess-card.utils';
import { useGuessCard } from './guess-card.hook';

import { IconCard } from '$components/icon-card';

export const GuessCard: React.FC<IIGuessCard> = ({ id }) => {
  const { icon, state, pickCard, isCardClosed, cardAnimation } =
    useGuessCard(id);

  return (
    <IconCard
      iconName={icon}
      onClick={pickCard}
      isClosed={isCardClosed}
      bgColor={getCardColorFromState(state)}
      highlightColor={getHighlightColorFromState(state)}
      animation={cardAnimation}
      iconColor={'black'}
    />
  );
};
