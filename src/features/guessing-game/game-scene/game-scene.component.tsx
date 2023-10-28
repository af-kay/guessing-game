import styled, { css } from 'styled-components';
import { useState } from 'react';

import { useGuessingGame } from '../guessing-game.provider.hook';
import { GameConfigMenu } from '../game-config/game-config.component';
import { DEFAULT_GUESSING_GAME_CONFIG } from '../game-config';

import { DebugInfo } from './debug-info';
import { GameBoard } from './game-board';
import { IGameScene } from './game-scene.types';
import { HideGameButton } from './hide-game-button';
import { RestartGameButton } from './restart-game-button';

import { Confetti } from '$shared/components';

export const GameScene: React.FC<IGameScene> = ({ additionalButtons }) => {
  const {
    state: { isFinished },
  } = useGuessingGame();

  const [isGameHidden, setIsGameHidden] = useState(false);

  return (
    <>
      <HideGameButton
        isGameHidden={isGameHidden}
        onToggle={() => setIsGameHidden(prev => !prev)}
      />
      <Layout isHidden={isGameHidden}>
        <Title>Guessing game</Title>
        <RestartGameButton />
        <GameBoard />
        <GameConfigMenu additionalButtons={additionalButtons} />
      </Layout>
      {DEFAULT_GUESSING_GAME_CONFIG.displayDebugStats && <DebugInfo />}
      {isFinished && <Confetti />}
    </>
  );
};

const Title = styled.h1`
  color: #d9d9d9;
  text-shadow:
    -1px -1px 1px rgba(255, 255, 255, 0.1),
    1px 1px 1px rgba(0, 0, 0, 0.5);
`;

const Layout = styled.div<{ isHidden: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 32px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2000;

  transition: opacity 0.5s ease-in;

  ${p =>
    p.isHidden &&
    css`
      pointer-events: none;
      opacity: 0;
    `}
`;
