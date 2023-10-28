import { FaCog } from 'react-icons/fa';
import styled from 'styled-components';

import { ButtonLayout } from '$shared/components';
import { guessingGameFeatureFlagProtectedFC } from '$features/guessing-game/guessing-game.config';

export const GuessingGameConfigureConfig = guessingGameFeatureFlagProtectedFC(
  'configureGameButton',
  () => {
    return (
      <Layout>
        <ButtonLayout>
          Configure <FaCog />
        </ButtonLayout>
      </Layout>
    );
  },
);

const Layout = styled.div``;
