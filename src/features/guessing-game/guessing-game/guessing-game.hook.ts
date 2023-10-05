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

  const findGameCardById = (id: GuessCardData['id']) =>
    gameCards.find(c => c.id === id)!;

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

  const pickCard = (id: GuessCardData['id']) => {
    if (pickedCards.length === GUESSING_GAME_CONFIG.cardsForSingleIcon) {
      return; // Unable to pick because of already picked enough
    }

    const card = findGameCardById(id);
    if (card.state !== GuessCardState.CLOSED) {
      return; // Can pick card only if closed
    }

    updateCard({
      ...card,
      state: GuessCardState.PICKED,
    });
  };

  const startGame = () => {
    setGameState(GuessingGameSessionState.IN_PROGRESS);
  };

  useEffect(() => {
    const isEnoughToMakeGuess =
      pickedCards.length === GUESSING_GAME_CONFIG.cardsForSingleIcon;

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

  return {
    gameState,
    gameCards,
    pickCardById: pickCard,
    startGame,
  };
};
