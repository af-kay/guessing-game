import { GuessCardData } from '../guessing-game.types';

export enum GuessCardState {
  CLOSED = 'closed',
  PICKED = 'picked',
  GUESSED = 'guessed',
  GUESSED_WRONG = 'guessed_wrong',
  SOLVED = 'solved',
}

export type IIGuessCard = {
  id: GuessCardData['id'];
};
