import { GuessingGameSessionState } from '../guessing-game.types';

export const canStartGame = (state: GuessingGameSessionState) => {
  const statesToStartGameFrom = [
    GuessingGameSessionState.DONE,
    GuessingGameSessionState.NOT_STARTED,
  ];

  return statesToStartGameFrom.includes(state);
};

export const canResumeGame = (state: GuessingGameSessionState) => {
  const statesToResumeGameFrom = [GuessingGameSessionState.PAUSED];

  return statesToResumeGameFrom.includes(state);
};

export const canPauseGame = (state: GuessingGameSessionState) => {
  const statesToPauseGameFrom = [GuessingGameSessionState.IN_PROGRESS];

  return statesToPauseGameFrom.includes(state);
};

export const canFinishGame = (state: GuessingGameSessionState) => {
  const statesToFinishGameFrom = [GuessingGameSessionState.IN_PROGRESS];

  return statesToFinishGameFrom.includes(state);
};
