import { useCallback, useMemo, useState } from 'react';

import { GuessingGameSessionState } from '../guessing-game.types';

export const useGameState = (initialState: GuessingGameSessionState) => {
  const [gameState, setGameState] = useState(initialState);

  const canStartGame = useMemo(() => {
    const statesToStartGameFrom = [
      GuessingGameSessionState.DONE,
      GuessingGameSessionState.NOT_STARTED,
    ];

    return statesToStartGameFrom.includes(gameState);
  }, [gameState]);

  const startGame = useCallback(() => {
    if (canStartGame) {
      setGameState(GuessingGameSessionState.IN_PROGRESS);
    }
  }, [canStartGame]);

  return {
    gameState,
    canStartGame,
    startGame,
  };
};
