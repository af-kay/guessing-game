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
    <Layout>
      {isFinished && <Confetti />}
      {GUESSING_GAME_CONFIG.displayDebugStats && <DebugInfo />}
      <GameBoard />
    </Layout>
  );
};

const Layout = styled.div``;
