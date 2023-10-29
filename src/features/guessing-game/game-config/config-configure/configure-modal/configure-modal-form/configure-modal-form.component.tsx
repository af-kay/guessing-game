import styled from 'styled-components';

import { IconsChooser } from './icons-chooser';

import { useGuessingGame } from '$features/guessing-game/guessing-game.provider.hook';

export const ConfigureModalForm: React.FC = () => {
  const {
    config: {
      config: { cardsAmount, cardsForSingleGuess },
    },
  } = useGuessingGame();

  return (
    <Layout>
      <IconsChooser
        minEnabledIconsRequired={cardsAmount / cardsForSingleGuess}
      />
      <p>Form body stuff</p>
      <p>Form body stuff</p>
      <p>Form body stuff</p>
      <p>Form body stuff</p>
      <p>Form body stuff</p>
      <p>Form body stuff</p>
      <p>Form body stuff</p>
      <p>Form body stuff</p>
    </Layout>
  );
};

const Layout = styled.div``;
