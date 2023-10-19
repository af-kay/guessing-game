import { useEffect } from 'react';

import { useGuessingGame } from '../guessing-game.hook';
import { GUESSING_GAME_CONFIG } from '../guessing-game.config';

import { GameEventCallbacks, IUseGameEvents } from './game-events.types';

import {
  NotifyLevel,
  createPrefixedNotifier,
  isArrayOfSame,
} from '$shared/utils';

const pass = () => {};

const trace = createPrefixedNotifier({
  level: NotifyLevel.DEV,
  prefix: 'useGameEvents',
});

export const useGameEvents: IUseGameEvents = ({
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
      pickedCards.length === GUESSING_GAME_CONFIG.cardsForSingleGuess;

    if (isEnoughToMakeGuess) {
      const isGuessedRight = isArrayOfSame(pickedCards, c => c.icon);

      trace('onGuessed');
      onGuessed(isGuessedRight, pickedCards);
    }
  }, [pickedCards, onGuessed]);

  useEffect(() => {
    if (isFinished) {
      trace('onGameFinished');
      onGameFinished();
    }
  }, [isFinished, onGameFinished]);

  useEffect(() => {
    if (GUESSING_GAME_CONFIG.autoSolveLastGuess) {
      const isOnlyLastGuessLeft =
        nonGuessedCards.length === GUESSING_GAME_CONFIG.cardsForSingleGuess;

      if (isOnlyLastGuessLeft) {
        trace('onLastGuessLeft');
        onLastGuessLeft(nonGuessedCards);
      }
    }
  }, [nonGuessedCards, onLastGuessLeft]);
};
