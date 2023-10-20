import styled from 'styled-components';
import { FaCog } from 'react-icons/fa';

import { useGuessingGame } from '../guessing-game.hook';
import { DEFAULT_GUESSING_GAME_CONFIG } from '../game-config';

import { DebugInfo } from './debug-info';
import { GameBoard } from './game-board';

import { Confetti } from '$shared/components';

export const GameScene = () => {
  const {
    state: { isFinished },
  } = useGuessingGame();

  return (
    <>
      <Layout>
        <Title>Guessing game</Title>
        <p>
          Configure <FaCog />{' '}
        </p>
        <GameBoard />
      </Layout>
      {DEFAULT_GUESSING_GAME_CONFIG.displayDebugStats && <DebugInfo />}
      {isFinished && <Confetti />}
    </>
  );
};

const Title = styled.h1`
  color: #b993d6;
`;

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
