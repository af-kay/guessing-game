import { useGameLogic } from './game-logic';
import { GuessingGameContextProvider } from './guessing-game.context';
import { GameScene } from './game-scene';

export const GuessingGame = () => (
  <GuessingGameContextProvider>
    <Game />
  </GuessingGameContextProvider>
);

const Game = () => {
  useGameLogic();

  return <GameScene />;
};
