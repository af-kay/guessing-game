import { BooleanText } from '../../../../shared/components/boolean-text';
import { useGuessingGame } from '../../guessing-game.provider.hook';

export const DebugInfo = () => {
  const {
    state: { isIdle, isPaused, isRunning, isFinished },
  } = useGuessingGame();

  return (
    <div>
      <h2>Debug info</h2>
      <p>
        isIdle? <BooleanText>{isIdle}</BooleanText>
      </p>
      <p>
        isPaused? <BooleanText>{isPaused}</BooleanText>
      </p>
      <p>
        isRunning? <BooleanText>{isRunning}</BooleanText>
      </p>
      <p>
        isFinished? <BooleanText>{isFinished}</BooleanText>
      </p>
    </div>
  );
};
