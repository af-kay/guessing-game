import styled from 'styled-components';

import { useGuessingGame } from '../guessing-game.hook';
import { GameConfigMenu } from '../game-config/game-config.component';
import { DEFAULT_GUESSING_GAME_CONFIG } from '../game-config';

import { DebugInfo } from './debug-info';
import { GameBoard } from './game-board';
import { IGameScene } from './game-scene.types';

import { Confetti } from '$shared/components';

export const GameScene: React.FC<IGameScene> = ({ additionalButtons }) => {
  const {
    state: { isFinished },
  } = useGuessingGame();

  return (
    <>
      <Layout>
        <Title>Guessing game</Title>
        <GameBoard />
        <GameConfigMenu additionalButtons={additionalButtons} />
      </Layout>
      {DEFAULT_GUESSING_GAME_CONFIG.displayDebugStats && <DebugInfo />}
      {isFinished && <Confetti />}
    </>
  );
};

const Title = styled.h1`
  color: white;
  font-weight: normal;
  letter-spacing: 2px;
  backdrop-filter: blur(4px);
  font-size: 2.2rem;
  line-height: 1em;
`;

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 32px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2000;
`;
