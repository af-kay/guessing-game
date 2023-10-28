import { useEffect } from 'react';
import toast from 'react-hot-toast';

import { DEFAULT_GUESSING_GAME_CONFIG } from '../game-config';
import { useGuessingGame } from '../guessing-game.provider.hook';
import { GuessCardState } from '../guessing-game.types';
import { useGameEvents } from '../game-events';

import { getNextCardStateByGuess } from './game-logic.utils';

export const useGameLogic = () => {
  useGuessLogic__SideEffect();
  useAutoSolveLogic__SideEffect();
  useGameAutoStart__SideEffect();
  useFinishGameWhenNoCardsLeft__SideEffect();
  useGenerateNewCardsAndAutoStartOnFinish__SideEffect();
  useRestartGameLogic__SideEffect();
};

const useRestartGameLogic__SideEffect = () => {
  const {
    state: { isAboutToRestart, startGame },
    cards: { reinitialize },
  } = useGuessingGame();

  const RESTART_DELAY = 1000;

  useEffect(() => {
    if (isAboutToRestart && startGame) {
      setTimeout(() => {
        startGame();
        reinitialize();

        toast('Game restarted!');
      }, RESTART_DELAY);
    }
  }, [isAboutToRestart, reinitialize, startGame]);
};

const useGenerateNewCardsAndAutoStartOnFinish__SideEffect = () => {
  const {
    cards: { reinitialize },
    state: { startGame },
  } = useGuessingGame();

  useGameEvents({
    onGameFinished: () => {
      if (DEFAULT_GUESSING_GAME_CONFIG.autoRestartOnFinish) {
        setTimeout(() => {
          if (startGame) {
            startGame();
            reinitialize();
          }
        }, DEFAULT_GUESSING_GAME_CONFIG.autoRestartDelay);
      }
    },
  });
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
        }, DEFAULT_GUESSING_GAME_CONFIG.wrongGuessDisplayMs);
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
      if (DEFAULT_GUESSING_GAME_CONFIG.autoSolveLastGuess) {
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
