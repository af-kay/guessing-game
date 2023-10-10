import styled from 'styled-components';

import { GameBoard } from './game-board';
import { GameStats } from './game-stats';

export const GameScene = () => {
  // TODO: controls, menus, etc

  return (
    <Layout>
      <GameStats />
      <GameBoard />
    </Layout>
  );
};

const Layout = styled.div``;
