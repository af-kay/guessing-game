import React, { useContext } from 'react';

type GuessingGameContextType = {};

const GuessingGameContext = React.createContext({} as GuessingGameContextType);

export const GuessingGameContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  // TODO: states

  return (
    <GuessingGameContext.Provider value={{}}>
      {children}
    </GuessingGameContext.Provider>
  );
};

export const useGuessingGameContext = () => useContext(GuessingGameContext);
