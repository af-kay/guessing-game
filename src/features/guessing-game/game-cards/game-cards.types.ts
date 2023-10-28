import { GuessCardData } from '../guessing-game.types';

export type UseGameCards = (generateCardsFn: () => GuessCardData[]) => {
  allCards: GuessCardData[];
  pickedCards: GuessCardData[];
  nonGuessedCards: GuessCardData[];
  pickCard: (id: GuessCardData['id']) => void;
  updateCard: (updatedCard: GuessCardData) => void;
  updateCards: (updatedCard: GuessCardData[]) => void;

  reinitialize: () => void;
};
