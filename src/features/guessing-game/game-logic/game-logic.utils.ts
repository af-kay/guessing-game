import { GuessCardState } from '../guessing-game.types';

export const getNextCardStateByGuess = (isGuessedRight: boolean) =>
  isGuessedRight ? GuessCardState.GUESSED : GuessCardState.GUESSED_WRONG;
