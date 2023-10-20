import { useCallback, useMemo, useState } from 'react';

import { GuessCardData, GuessCardState } from '../guessing-game.types';
import { DEFAULT_GUESSING_GAME_CONFIG } from '../game-config';

import type { UseGameCards } from './game-cards.types';

export const useGameCards: UseGameCards = generateCardsFn => {
  const [gameCards, setGameCards] = useState(generateCardsFn);

  const findGameCardById = useCallback(
    (id: GuessCardData['id']) => gameCards.find(c => c.id === id)!,
    [gameCards],
  );

  const updateCards = useCallback((updatedCards: GuessCardData[]) => {
    setGameCards(prev =>
      prev.map(
        existingCard =>
          updatedCards.find(c => c.id === existingCard.id) ?? existingCard,
      ),
    );
  }, []);

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
        pickedCards.length === DEFAULT_GUESSING_GAME_CONFIG.cardsForSingleGuess,
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

  const reset = useCallback(() => {
    setGameCards(generateCardsFn());
  }, [generateCardsFn]);

  return {
    allCards: gameCards,
    pickCard,
    pickedCards,
    nonGuessedCards,
    updateCard,
    updateCards,
    reset,
  };
};
