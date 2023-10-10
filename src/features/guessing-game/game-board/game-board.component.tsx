import { Board } from '../../../components/board';

import { GuessCard } from './guess-card';
import { useGuessingGame } from '../guessing-game.hook';

export const GameBoard = () => {
  const {
    cards: { allCards },
  } = useGuessingGame();

  return (
    <Board>
      {allCards.map(card => (
        <GuessCard key={card.id} id={card.id} />
      ))}
    </Board>
  );
};
