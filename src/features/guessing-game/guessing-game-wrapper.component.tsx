import { GuessingGameContextProvider } from './guessing-game/guessing-game.context';
import { Game } from './guessing-game/guessing-game.component';

export const GuessingGameWrapper = () => {
  return (
    <GuessingGameContextProvider>
      <Game />
    </GuessingGameContextProvider>
  );
};
