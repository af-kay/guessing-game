import { VscDebugRestart } from 'react-icons/vsc';

import { IRestartGameButton } from './restart-game-button.types';
import { useRestartGameButton } from './restart-game-button.hook';

import { ButtonLayout } from '$shared/components';
import { guessingGameFeatureFlagProtectedFC } from '$features/guessing-game/guessing-game.config';

export const RestartGameButton: React.FC<IRestartGameButton> =
  guessingGameFeatureFlagProtectedFC('restartGameButton', () => {
    const { isDisabled, restartGame, isLoading, text } = useRestartGameButton();

    return (
      <ButtonLayout
        isEnabled={!isDisabled}
        isLoading={isLoading}
        onClick={restartGame}
      >
        {text} <VscDebugRestart />
      </ButtonLayout>
    );
  });
