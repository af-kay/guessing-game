import { Board } from '../../../components/board/board.component';
import { useGuessingGameLogic } from './game-logic/game-logic.hook';
import { GuessCard } from './guess-card/guess-card.component';
import { useGuessingGame } from './guessing-game.hook';

export const Game = () => {
  const { gameCards } = useGuessingGame();

  useGuessingGameLogic();

  return (
    <Board>
      {gameCards.map(card => (
        <GuessCard key={card.id} id={card.id} />
      ))}
    </Board>
  );
};
