import { IUseGameStats } from './game-stats.types';

export const useGameStats: IUseGameStats = () => {

  return {
    guessesMade: 0,
    wrongGuesses: 0,
  };
};
