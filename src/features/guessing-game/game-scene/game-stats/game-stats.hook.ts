import { useState } from 'react';

import { useGameEvents } from '../../game-events';

import { UseGameStats } from './game-stats.types';

export const useGameStats: UseGameStats = () => {
  const [guessesMade, setGuessesMade] = useState(0);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [successfulGuesses, setSuccessfulGuesses] = useState(0);

  useGameEvents({
    onGuessed: isRight => {
      setGuessesMade(prev => prev + 1);
      if (!isRight) {
        setWrongGuesses(prev => prev + 1);
      } else {
        setSuccessfulGuesses(prev => prev + 1);
      }
    },
  });

  return {
    guessesMade,
    wrongGuesses,
    successfulGuesses,
  };
};
