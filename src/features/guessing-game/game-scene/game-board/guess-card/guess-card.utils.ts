import { GuessCardState } from '../../../guessing-game.types';

import { IIconCard } from '$shared/components/icon-card/icon-card.types';
import { Theme } from '$shared/types';

export const getCardColorFromState = (
  state: GuessCardState,
  colors: Theme['ICON_CARD'],
): string => {
  const converter: Record<GuessCardState, string> = {
    [GuessCardState.CLOSED]: colors.CLOSED ?? 'grey',
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
    [GuessCardState.PICKED]: '#ffffff88',
    [GuessCardState.GUESSED]: '#00ff0055',
    [GuessCardState.GUESSED_WRONG]: '#ff000055',
    [GuessCardState.SOLVED]: undefined,
  };

  return converter[state];
};
