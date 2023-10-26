import { useGuessingGame } from '../../guessing-game.hook';

import { GuessCard } from './guess-card';

import { Board } from '$shared/components/board';
import { useThemeContext } from '$features/theme/particles-bg.context.hook';

export const GameBoard = () => {
  const {
    cards: { allCards },
    config: { config },
  } = useGuessingGame();

  const { theme } = useThemeContext();

  return (
    <Board maxColumns={config.maxColumns} colors={theme.BOARD}>
      {allCards.map(card => (
        <GuessCard key={card.id} id={card.id} />
      ))}
    </Board>
  );
};
