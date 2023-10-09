import { useCallback, useMemo, useState } from 'react';

import { GuessCardData } from '../guessing-game.types';
import { GUESSING_GAME_CONFIG } from '../guessing-game.config';
import { GuessCardState } from '../guess-card/guess-card.types';

export const useGameCards = (generateCardsFn: () => GuessCardData[]) => {
  const [gameCards, setGameCards] = useState(generateCardsFn);

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

  return {
    cards: gameCards,
    pickCard,
    pickedCards,
    nonGuessedCards,
    updateCard,
  };
};
