import { useEffect } from 'react';

import { GUESSING_GAME_CONFIG } from '../guessing-game.config';
import { useGuessingGame } from '../guessing-game.hook';
import { GuessCardState } from '../guess-card';

export const useGameLogic = () => {
  useGuessLogic__SideEffect();
  useAutoSolveLogic__SideEffect();
};

const useGuessLogic__SideEffect = () => {
  const { pickedCards, updateCard } = useGuessingGame();

  useEffect(() => {
    const isEnoughToMakeGuess =
      pickedCards.length === GUESSING_GAME_CONFIG.cardsForSingleGuess;

    if (isEnoughToMakeGuess) {
      const isGuessedRight = pickedCards.every(
        c => c.icon === pickedCards[0].icon,
      );

      const nextCardsState = isGuessedRight
        ? GuessCardState.GUESSED
        : GuessCardState.GUESSED_WRONG;

      // Highlight all guessed cards with their next state
      pickedCards.forEach(card => {
        updateCard({
          ...card,
          state: nextCardsState,
        });
      });

      if (!isGuessedRight) {
        // Close cards if guessed wrong
        setTimeout(() => {
          pickedCards.forEach(card => {
            updateCard({
              ...card,
              state: GuessCardState.CLOSED,
            });
          });
        }, GUESSING_GAME_CONFIG.wrongGuessDisplayMs);
      }
    }
  }, [pickedCards, updateCard]);
};

const useAutoSolveLogic__SideEffect = () => {
  const { nonGuessedCards, updateCard } = useGuessingGame();

  useEffect(() => {
    if (GUESSING_GAME_CONFIG.autoSolveLastGuess) {
      const isOnlyLastGuessLeft =
        nonGuessedCards.length === GUESSING_GAME_CONFIG.cardsForSingleGuess;

      if (isOnlyLastGuessLeft) {
        nonGuessedCards.forEach(card => {
          updateCard({
            ...card,
            state: GuessCardState.GUESSED,
          });
        });
      }
    }
  }, [nonGuessedCards, updateCard]);
};
