import { useGuessingGame } from '../../guessing-game.provider.hook';

import { GuessCard } from './guess-card';

import { Board } from '$shared/components/board';
import { useThemeContext } from '$features/theme/particles-bg.context.hook';

export const GameBoard = () => {
  const {
    cards: { allCards },
    config: { config },
    state: { isRunning },
  } = useGuessingGame();

  const { theme } = useThemeContext();

  return (
    <Board
      maxColumns={config.maxColumns}
      colors={theme.BOARD}
      isDisabled={!isRunning}
    >
      {allCards.map(card => (
        <GuessCard key={card.id} id={card.id} />
      ))}
    </Board>
  );
};
