import { GuessCardData } from '../guessing-game.types';

export type IUseGameCards = (generateCardsFn: () => GuessCardData[]) => {
  allCards: GuessCardData[];
  pickedCards: GuessCardData[];
  nonGuessedCards: GuessCardData[];
  pickCard: (id: GuessCardData['id']) => void;
  updateCard: (updatedCard: GuessCardData) => void;
};
