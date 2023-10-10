import { Board } from '../../components/board';

import { useGameLogic } from './game-logic';
import { GuessCard } from './guess-card';

import { GuessingGameContextProvider } from './guessing-game.context';
import { useGuessingGame } from './guessing-game.hook';

export const GuessingGame = () => (
  <GuessingGameContextProvider>
    <Game />
  </GuessingGameContextProvider>
);

const Game = () => {
  const {
    cards: { allCards },
  } = useGuessingGame();

  useGameLogic();

  return (
    <Board>
      {allCards.map(card => (
        <GuessCard key={card.id} id={card.id} />
      ))}
    </Board>
  );
};
