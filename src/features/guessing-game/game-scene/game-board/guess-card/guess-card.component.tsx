import { IIGuessCard } from './guess-card.types';
import {
  getCardColorFromState,
  getHighlightColorFromState,
} from './guess-card.utils';
import { useGuessCard } from './guess-card.hook';

import { IconCard } from '$shared/components/icon-card';
import { useThemeContext } from '$features/theme/particles-bg.context.hook';

export const GuessCard: React.FC<IIGuessCard> = ({ id }) => {
  const { icon, state, pickCard, isCardClosed, cardAnimation } =
    useGuessCard(id);

  const { theme } = useThemeContext();

  return (
    <IconCard
      iconName={icon}
      onClick={pickCard}
      isClosed={isCardClosed}
      bgColor={getCardColorFromState(state, theme.ICON_CARD)}
      highlightColor={getHighlightColorFromState(state)}
      animation={cardAnimation}
      iconColor={'black'}
    />
  );
};
