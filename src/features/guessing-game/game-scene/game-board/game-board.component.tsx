import { useGuessingGame } from '../../guessing-game.hook';

import { GuessCard } from './guess-card';

import { Board } from '$shared/components/board';

export const GameBoard = () => {
  const {
    cards: { allCards },
    config: { config },
  } = useGuessingGame();

  return (
    <Board maxColumns={config.maxColumns}>
      {allCards.map(card => (
        <GuessCard key={card.id} id={card.id} />
      ))}
    </Board>
  );
};
