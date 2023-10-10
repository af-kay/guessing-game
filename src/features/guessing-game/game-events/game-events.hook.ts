import { useEffect } from 'react';

import { useGuessingGame } from '../guessing-game.hook';
import { GUESSING_GAME_CONFIG } from '../guessing-game.config';
import { GameEventCallbacks, IUseGameEvents } from './game-events.types';

const pass = () => {};

export const useGameEvents: IUseGameEvents = ({
  onGuessed = pass,
  onLastGuessLeft = pass,
}: GameEventCallbacks) => {
  const {
    cards: { pickedCards, nonGuessedCards },
  } = useGuessingGame();

  useEffect(() => {
    const isEnoughToMakeGuess =
      pickedCards.length === GUESSING_GAME_CONFIG.cardsForSingleGuess;

    if (isEnoughToMakeGuess) {
      const isGuessedRight = pickedCards.every(
        c => c.icon === pickedCards[0].icon,
      );

      onGuessed(isGuessedRight, pickedCards);
    }
  }, [pickedCards, onGuessed]);

  useEffect(() => {
    if (GUESSING_GAME_CONFIG.autoSolveLastGuess) {
      const isOnlyLastGuessLeft =
        nonGuessedCards.length === GUESSING_GAME_CONFIG.cardsForSingleGuess;

      if (isOnlyLastGuessLeft) {
        onLastGuessLeft(nonGuessedCards);
      }
    }
  }, [nonGuessedCards, onLastGuessLeft]);
};
