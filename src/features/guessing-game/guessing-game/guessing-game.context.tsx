import React, { useContext } from 'react';

import { GuessingGameSession } from './guessing-game.types';
import { useGuessingGame } from './guessing-game.hook';

const GuessingGameContext = React.createContext({} as GuessingGameSession);

export const GuessingGameContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => (
  <GuessingGameContext.Provider value={useGuessingGame()}>
    {children}
  </GuessingGameContext.Provider>
);

export const useGuessingGameContext = () => useContext(GuessingGameContext);
