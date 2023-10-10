import { GuessCardState } from '../../guessing-game.types';

export const getCardColorFromState = (state: GuessCardState): string => {
  const converter: Record<GuessCardState, string> = {
    [GuessCardState.CLOSED]: 'grey',
    [GuessCardState.PICKED]: 'lightblue',
    [GuessCardState.GUESSED]: 'lightgreen',
    [GuessCardState.GUESSED_WRONG]: 'indianred',
    [GuessCardState.SOLVED]: 'white',
  };

  return converter[state];
};
