import { GuessCardData } from '../guessing-game.types';

export type IUseGameCards = (generateCardsFn: () => GuessCardData[]) => {
  allCards: GuessCardData[];
  pickedCards: GuessCardData[];
  nonGuessedCards: GuessCardData[];
  pickCard: (id: GuessCardData['id']) => void;
  updateCard: (updatedCard: GuessCardData) => void;

  // TODO: better naming. Resets cards with new ones provided by generateCardsFn
  reset: () => void;
};
