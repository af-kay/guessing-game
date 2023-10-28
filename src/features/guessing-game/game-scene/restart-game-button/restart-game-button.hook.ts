import { UseRestartGameButton } from './restart-game-button.types';

import { useGuessingGame } from '$features/guessing-game/guessing-game.provider.hook';

export const useRestartGameButton: UseRestartGameButton = () => {
  const {
    state: { isAboutToRestart, prepareToRestart },
  } = useGuessingGame();

  return {
    isDisabled: !prepareToRestart,
    isLoading: isAboutToRestart,
    text: isAboutToRestart ? 'Restarting...' : 'Restart',
    restartGame: prepareToRestart ?? undefined,
  };
};
