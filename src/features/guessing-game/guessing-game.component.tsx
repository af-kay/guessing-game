import { GameBoard } from './game-board';

import { useGameLogic } from './game-logic';
import { GuessingGameContextProvider } from './guessing-game.context';

export const GuessingGame = () => (
  <GuessingGameContextProvider>
    <Game />
  </GuessingGameContextProvider>
);

const Game = () => {
  useGameLogic();

  return <GameBoard />;
};
