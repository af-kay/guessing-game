import { useEffect } from 'react';

import { useGuessingGame } from '../guessing-game.hook';
import { DEFAULT_GUESSING_GAME_CONFIG } from '../game-config';

import { GameEventCallbacks, UseGameEvents } from './game-events.types';

import { isArrayOfSame } from '$shared/utils';

const pass = () => {};

export const useGameEvents: UseGameEvents = ({
  onGuessed = pass,
  onLastGuessLeft = pass,
  onGameFinished = pass,
}: GameEventCallbacks) => {
  const {
    cards: { pickedCards, nonGuessedCards },
    state: { isFinished },
  } = useGuessingGame();

  useEffect(() => {
    const isEnoughToMakeGuess =
      pickedCards.length === DEFAULT_GUESSING_GAME_CONFIG.cardsForSingleGuess;

    if (isEnoughToMakeGuess) {
      const isGuessedRight = isArrayOfSame(pickedCards, c => c.icon);

      onGuessed(isGuessedRight, pickedCards);
    }
  }, [pickedCards, onGuessed]);

  useEffect(() => {
    if (isFinished) {
      onGameFinished();
    }
  }, [isFinished, onGameFinished]);

  useEffect(() => {
    if (DEFAULT_GUESSING_GAME_CONFIG.autoSolveLastGuess) {
      const isOnlyLastGuessLeft =
        nonGuessedCards.length ===
        DEFAULT_GUESSING_GAME_CONFIG.cardsForSingleGuess;

      if (isOnlyLastGuessLeft) {
        onLastGuessLeft(nonGuessedCards);
      }
    }
  }, [nonGuessedCards, onLastGuessLeft]);
};
