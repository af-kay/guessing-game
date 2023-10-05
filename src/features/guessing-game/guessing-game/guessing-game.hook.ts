import { useState } from 'react';

import {
  GuessCardData,
  GuessingGameSession,
  GuessingGameSessionState,
} from './guessing-game.types';
import { makeGuessingGameCards } from './guessing-game.utils';

export const useGuessingGame = (): GuessingGameSession => {
  const [gameState, setGameState] = useState(
    GuessingGameSessionState.IN_PROGRESS, // TODO: game lifecycle
  );
  const [gameCards, setGameCards] = useState<GuessCardData[]>(
    makeGuessingGameCards(),
  );

  const startGame = () => {
    setGameState(GuessingGameSessionState.IN_PROGRESS);
  };

  return {
    gameState,
    gameCards,
    startGame,
  };
};
