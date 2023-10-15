import React from 'react';

import { GuessingGameSession } from './guessing-game.types';
import { GUESSING_GAME_CONFIG } from './guessing-game.config';
import { makeGuessingGameCards } from './cards-generation';
import { useGameCards } from './game-cards';
import { useGameState } from './game-state';

export const GuessingGameContext = React.createContext(
  {} as GuessingGameSession,
);

export const GuessingGameContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const state = useGameState(GUESSING_GAME_CONFIG.initialGameState);
  const cards = useGameCards(() => makeGuessingGameCards(GUESSING_GAME_CONFIG));

  return (
    <GuessingGameContext.Provider value={{ state, cards }}>
      {children}
    </GuessingGameContext.Provider>
  );
};
