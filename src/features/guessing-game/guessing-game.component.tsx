import React from 'react';

import { useGameLogic } from './game-logic';
import { GuessingGameContextProvider } from './guessing-game.context';
import { GameScene } from './game-scene';
import { IGuessingGame } from './guessing-game.types';

export const GuessingGame: React.FC<IGuessingGame> = ({
  additionalButtons,
}) => (
  <GuessingGameContextProvider>
    <Game additionalButtons={additionalButtons} />
  </GuessingGameContextProvider>
);

const Game = React.memo<IGuessingGame>(({ additionalButtons = [] }) => {
  useGameLogic();

  return <GameScene additionalButtons={additionalButtons} />;
});
