import React from 'react';

import { GuessingGameSession } from './guessing-game.types';
import { makeGuessingGameCards } from './cards-generation';
import { useGameCards } from './game-cards';
import { useGameState } from './game-state';
import { GUESSING_GAME_CONFIG } from './guessing-game.config';

export const GuessingGameContext = React.createContext(
  {} as GuessingGameSession,
);

export const GuessingGameContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const state = useGameState(GUESSING_GAME_CONFIG.initialGameState);
  const cards = useGameCards(makeGuessingGameCards);

  return (
    <GuessingGameContext.Provider value={{ state, cards }}>
      {children}
    </GuessingGameContext.Provider>
  );
};
