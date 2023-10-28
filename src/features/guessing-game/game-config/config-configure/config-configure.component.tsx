import { FaCog } from 'react-icons/fa';
import styled from 'styled-components';
import { useState } from 'react';

import { ConfigureConfigModal } from './configure-modal';

import { ButtonLayout } from '$shared/components';
import { guessingGameFeatureFlagProtectedFC } from '$features/guessing-game/guessing-game.config';

export const GuessingGameConfigureConfig = guessingGameFeatureFlagProtectedFC(
  'configureGameButton',
  () => {
    const [isModalOpened, setIsModalOpened] = useState(false);

    const openModal = () => setIsModalOpened(true);
    const closeModal = () => setIsModalOpened(false);

    return (
      <>
        <Layout>
          <ButtonLayout onClick={openModal}>
            Configure <FaCog />
          </ButtonLayout>
        </Layout>
        {isModalOpened && (
          <ConfigureConfigModal onCloseRequested={closeModal} />
        )}
      </>
    );
  },
);

const Layout = styled.div``;
