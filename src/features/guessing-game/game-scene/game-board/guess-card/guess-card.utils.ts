import { GuessCardState } from '../../../guessing-game.types';

import { IIconCard } from '$components/icon-card/icon-card.types';

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

export const getHighlightColorFromState = (state: GuessCardState) => {
  const converter: Record<GuessCardState, IIconCard['highlightColor']> = {
    [GuessCardState.CLOSED]: undefined,
    [GuessCardState.PICKED]: '#ffffff44',
    [GuessCardState.GUESSED]: undefined,
    [GuessCardState.GUESSED_WRONG]: undefined,
    [GuessCardState.SOLVED]: undefined,
  };

  return converter[state];
};
