import { GUESSING_GAME_CONFIG } from '../guessing-game.config';
import { useGuessingGame } from '../guessing-game.hook';
import { GuessCardState } from '../guessing-game.types';
import { useGameEvents } from '../game-events';

import { getNextCardStateByGuess } from './game-logic.utils';
import { useEffect } from 'react';

export const useGameLogic = () => {
  useGuessLogic__SideEffect();
  useAutoSolveLogic__SideEffect();
  useGameAutoStart__SideEffect();
  useFinishGameWhenNoCardsLeft__SideEffect();
};

const useGuessLogic__SideEffect = () => {
  const {
    cards: { updateCard },
  } = useGuessingGame();

  useGameEvents({
    onGuessed: (isRightGuess, cards) => {
      const nextCardsState = getNextCardStateByGuess(isRightGuess);

      // Highlight all guessed cards with their next state
      cards.forEach(card => {
        updateCard({
          ...card,
          state: nextCardsState,
        });
      });

      if (!isRightGuess) {
        // Close cards if guessed wrong
        setTimeout(() => {
          cards.forEach(card => {
            updateCard({
              ...card,
              state: GuessCardState.CLOSED,
            });
          });
        }, GUESSING_GAME_CONFIG.wrongGuessDisplayMs);
      }
    },
  });
};

const useGameAutoStart__SideEffect = () => {
  const {
    state: { isIdle, startGame },
  } = useGuessingGame();

  useEffect(() => {
    if (isIdle && startGame) {
      startGame();
    }
  }, [isIdle, startGame]);
};

const useFinishGameWhenNoCardsLeft__SideEffect = () => {
  const {
    cards: { nonGuessedCards },
    state: { finishGame },
  } = useGuessingGame();

  useEffect(() => {
    const isNoCardsLeft = nonGuessedCards.length === 0;

    if (isNoCardsLeft && finishGame) {
      finishGame();
    }
  }, [nonGuessedCards, finishGame]);
};

const useAutoSolveLogic__SideEffect = () => {
  const {
    cards: { updateCard },
  } = useGuessingGame();

  useGameEvents({
    onLastGuessLeft: remainingCards => {
      if (GUESSING_GAME_CONFIG.autoSolveLastGuess) {
        remainingCards.forEach(card => {
          updateCard({
            ...card,
            state: GuessCardState.GUESSED,
          });
        });
      }
    },
  });
};
