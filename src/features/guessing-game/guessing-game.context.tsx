import React from 'react';

import { GuessingGameSession } from './guessing-game.types';
import { DEFAULT_GUESSING_GAME_CONFIG } from './game-config';
import { makeGuessingGameCards } from './cards-generation';
import { useGameCards } from './game-cards';
import { useGameState } from './game-state';

export const GuessingGameContext = React.createContext(
  {} as GuessingGameSession,
);

export const GuessingGameContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const state = useGameState(DEFAULT_GUESSING_GAME_CONFIG.initialGameState);
  const cards = useGameCards(() =>
    makeGuessingGameCards(DEFAULT_GUESSING_GAME_CONFIG),
  );

  return (
    <GuessingGameContext.Provider value={{ state, cards }}>
      {children}
    </GuessingGameContext.Provider>
  );
};
