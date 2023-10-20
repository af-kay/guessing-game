import { useGuessingGame } from '../../guessing-game.hook';

import { GuessCard } from './guess-card';

import { Board } from '$shared/components/board';

export const GameBoard = () => {
  const {
    cards: { allCards },
  } = useGuessingGame();

  return (
    <Board maxColumns={4}>
      {allCards.map(card => (
        <GuessCard key={card.id} id={card.id} />
      ))}
    </Board>
  );
};
