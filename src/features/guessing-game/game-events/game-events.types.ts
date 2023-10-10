import { GuessCardData } from '../guessing-game.types';

export type GameEventCallbacks = {
  onGuessed?: (isRightGuess: boolean, cards: GuessCardData[]) => void;
  onLastGuessLeft?: (remainingCards: GuessCardData[]) => void;
};

export type IUseGameEvents = (callbacks: GameEventCallbacks) => void;
