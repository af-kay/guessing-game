import React, { useContext } from 'react';

import { GuessCardData, GuessingGameSession } from './guessing-game.types';
import { useGuessingGameProvider } from './guessing-game.hook';

const GuessingGameContext = React.createContext({} as GuessingGameSession);

export const GuessingGameContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => (
  <GuessingGameContext.Provider value={useGuessingGameProvider()}>
    {children}
  </GuessingGameContext.Provider>
);

export const useGuessingGame = () => useContext(GuessingGameContext);

// TODO: move out of context
export const useGuessingGameCard = (id: GuessCardData['id']) => {
  const { gameCards } = useGuessingGame();

  return gameCards.find(c => c.id === id)!;
};
