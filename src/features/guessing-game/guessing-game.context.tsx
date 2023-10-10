import React from 'react';

import {
  GuessingGameSession,
  GuessingGameSessionState,
} from './guessing-game.types';
import { makeGuessingGameCards } from './guessing-game.utils';
import { useGameCards } from './game-cards';
import { useGameState } from './game-state';

export const GuessingGameContext = React.createContext(
  {} as GuessingGameSession,
);

export const GuessingGameContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const gameState = useGameState(GuessingGameSessionState.IN_PROGRESS);
  const gameCards = useGameCards(makeGuessingGameCards);

  return (
    <GuessingGameContext.Provider
      value={{
        state: gameState,
        cards: gameCards,
      }}
    >
      {children}
    </GuessingGameContext.Provider>
  );
};
