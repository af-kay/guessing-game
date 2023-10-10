import styled from 'styled-components';

import { IconCard } from '../../../../../components/icon-card';

import { IIGuessCard } from './guess-card.types';
import { getCardColorFromState } from './guess-card.utils';
import { useGuessCard } from './guess-card.hook';

export const GuessCard: React.FC<IIGuessCard> = ({ id }) => {
  const { icon, state, pickCard, isCardClosed, cardAnimation } =
    useGuessCard(id);

  return (
    <Layout>
      <IconCard
        iconName={icon}
        onClick={pickCard}
        isClosed={isCardClosed}
        bgColor={getCardColorFromState(state)}
        animation={cardAnimation}
        iconColor={'black'}
      />
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
