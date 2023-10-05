import { Board } from '../../../components/board/board.component';
import { GuessCard } from './guess-card/guess-card.component';
import { useGuessingGameProvider } from './guessing-game.hook';

export const Game = () => {
  const { gameCards } = useGuessingGameProvider();

  return (
    <Board>
      {gameCards.map(card => {
        return <GuessCard key={card.id} id={card.id} />;
      })}
    </Board>
  );
};
