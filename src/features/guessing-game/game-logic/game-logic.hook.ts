import { GUESSING_GAME_CONFIG } from '../guessing-game.config';
import { useGuessingGame } from '../guessing-game.hook';
import { GuessCardState } from '../guessing-game.types';
import { useGameEvents } from '../game-events';

import { getNextCardStateByGuess } from './game-logic.utils';

export const useGameLogic = () => {
  useGuessLogic__SideEffect();
  useAutoSolveLogic__SideEffect();
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
