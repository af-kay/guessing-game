import { IconCard } from '../../../../components/icon-card/icon-card.component';

import { IIGuessCard } from './guess-card.types';
import { getCardColorFromState } from './guess-card.utils';
import { useGuessCard } from './guess-card.hook';

export const GuessCard: React.FC<IIGuessCard> = ({ id }) => {
  const { icon, state, handleClick, isCardClosed, cardAnimation } =
    useGuessCard(id);

  return (
    <IconCard
      iconName={icon}
      onClick={handleClick}
      isClosed={isCardClosed}
      bgColor={getCardColorFromState(state)}
      animation={cardAnimation}
      iconColor={'black'}
    />
  );
};
