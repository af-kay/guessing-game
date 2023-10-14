import styled from 'styled-components';

import { useGuessingGame } from '../guessing-game.hook';
import { GUESSING_GAME_CONFIG } from '../guessing-game.config';

import { Confetti } from '../../../components/confetti';

import { DebugInfo } from './debug-info/debug-info.component';
import { GameBoard } from './game-board';

export const GameScene = () => {
  const {
    state: { isFinished },
  } = useGuessingGame();

  return (
    <>
      <Layout>
        <Title>Guessing game</Title>
        <GameBoard />
      </Layout>
      {GUESSING_GAME_CONFIG.displayDebugStats && <DebugInfo />}
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
