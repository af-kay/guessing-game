import styled, { css } from 'styled-components';

import { useGuessingGame } from '../guessing-game.hook';
import {
  DEFAULT_GUESSING_GAME_CONFIG,
  GuessingGameConfigureConfig,
} from '../game-config';
import { CrazyModeButton } from '../crazy-mode';

import { DebugInfo } from './debug-info';
import { GameBoard } from './game-board';

import { Confetti } from '$shared/components';

export const GameScene = () => {
  const {
    state: { isFinished },
  } = useGuessingGame();

  return (
    <>
      <Layout isCrazy={false}>
        <Title>Guessing game</Title>
        <GameBoard />
        <GuessingGameConfigureConfig />
        <CrazyModeButton />
      </Layout>
      {DEFAULT_GUESSING_GAME_CONFIG.displayDebugStats && <DebugInfo />}
      {isFinished && <Confetti />}
    </>
  );
};

const Title = styled.h1`
  color: #b993d6;
`;

const Layout = styled.div<{ isCrazy: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${p =>
    p.isCrazy &&
    css`
      animation: crazy 1s ease-in-out infinite;
    `}

  @keyframes crazy {
    from {
      opacity: 0.4;
      transform: translateX(10vw);
    }

    10% {
      opacity: 1;
    }

    15% {
      opacity: 0.1;
    }

    50% {
      opacity: 1;
      transform: translateX(-10vw);
    }

    75% {
      opacity: 0.1;
    }

    100% {
      opacity: 0.7;
      transform: translateX(10vw);
    }
  }
`;
