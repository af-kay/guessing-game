import { VscDebugRestart } from 'react-icons/vsc';

import { IRestartGameButton } from './restart-game-button.types';
import { useRestartGameButton } from './restart-game-button.hook';

import { ButtonLayout } from '$shared/components';

export const RestartGameButton: React.FC<IRestartGameButton> = () => {
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
};
