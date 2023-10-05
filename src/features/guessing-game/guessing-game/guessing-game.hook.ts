import { useCallback, useEffect, useMemo, useState } from 'react';

import {
  GuessCardData,
  GuessingGameSession,
  GuessingGameSessionState,
} from './guessing-game.types';
import { makeGuessingGameCards } from './guessing-game.utils';
import { GuessCardState } from './guess-card/guess-card.types';
import { GUESSING_GAME_CONFIG } from './guessing-game.config';

// TODO: split logic and state (move logic to 'inner' level)
export const useGuessingGameProvider = (): GuessingGameSession => {
  const [gameState, setGameState] = useState(
    GuessingGameSessionState.IN_PROGRESS, // TODO: game lifecycle
  );
  const [gameCards, setGameCards] = useState<GuessCardData[]>(
    makeGuessingGameCards(),
  );

  const findGameCardById = useCallback(
    (id: GuessCardData['id']) => gameCards.find(c => c.id === id)!,
    [gameCards],
  );

  const updateCard = useCallback((updatedCard: GuessCardData) => {
    setGameCards(prev =>
      prev.map(existingCard =>
        existingCard.id === updatedCard.id ? updatedCard : existingCard,
      ),
    );
  }, []);

  const pickedCards = useMemo(
    () => gameCards.filter(c => c.state === GuessCardState.PICKED),
    [gameCards],
  );

  const nonGuessedCards = useMemo(
    () => gameCards.filter(c => c.state !== GuessCardState.GUESSED),
    [gameCards],
  );

  const pickCard = useCallback(
    (id: GuessCardData['id']) => {
      const card = findGameCardById(id);

      const isEnoughPickedAlready = Boolean(
        pickedCards.length === GUESSING_GAME_CONFIG.cardsForSingleGuess,
      );
      const isCardPickable = card.state === GuessCardState.CLOSED;

      if (isCardPickable && !isEnoughPickedAlready) {
        updateCard({
          ...card,
          state: GuessCardState.PICKED,
        });
      }
    },
    [pickedCards, updateCard, findGameCardById],
  );

  const startGame = useCallback(() => {
    const statesToStartGameFrom = [
      GuessingGameSessionState.DONE,
      GuessingGameSessionState.NOT_STARTED,
    ];

    if (statesToStartGameFrom.includes(gameState)) {
      setGameState(GuessingGameSessionState.IN_PROGRESS);
    }
  }, [gameState]);

  // Check and make guess if picked enough
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
  }, [nonGuessedCards]);

  return {
    gameState,
    gameCards,
    pickCardById: pickCard,
    startGame,
  };
};
