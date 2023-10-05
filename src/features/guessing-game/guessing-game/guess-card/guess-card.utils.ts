import { GuessCardState } from './guess-card.types';

export const getCardColorFromState = (state: GuessCardState): string => {
  const converter: Record<GuessCardState, string> = {
    [GuessCardState.CLOSED]: 'grey',
    [GuessCardState.PICKED]: 'lightblue',
    [GuessCardState.GUESSED]: 'lightgreen',
    [GuessCardState.GUESSED_WRONG]: 'indianred',
    [GuessCardState.OPENED]: 'lightgrey',
  };

  return converter[state];
};
