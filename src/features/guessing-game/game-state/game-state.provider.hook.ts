import { useState } from 'react';

import { GuessingGameSessionState, UseGameState } from './game-state.types';
import {
  canFinishGame,
  canPauseGame,
  canPrepareGameToRestart,
  canResumeGame,
  canStartGame,
} from './game-state.utils';

export const useGameState: UseGameState = (
  initialState: GuessingGameSessionState,
) => {
  const [gameState, setGameState] = useState(initialState);

  const startGame = canStartGame(gameState)
    ? () => setGameState(GuessingGameSessionState.IN_PROGRESS)
    : null;

  const resumeGame = canResumeGame(gameState)
    ? () => setGameState(GuessingGameSessionState.IN_PROGRESS)
    : null;

  const pauseGame = canPauseGame(gameState)
    ? () => setGameState(GuessingGameSessionState.PAUSED)
    : null;

  const finishGame = canFinishGame(gameState)
    ? () => setGameState(GuessingGameSessionState.DONE)
    : null;

  const prepareToRestart = canPrepareGameToRestart(gameState)
    ? () => setGameState(GuessingGameSessionState.ABOUT_TO_RESTART)
    : null;

  return {
    isIdle: gameState === GuessingGameSessionState.NOT_STARTED,
    isRunning: gameState === GuessingGameSessionState.IN_PROGRESS,
    isPaused: gameState === GuessingGameSessionState.PAUSED,
    isFinished: gameState === GuessingGameSessionState.DONE,
    isAboutToRestart: gameState === GuessingGameSessionState.ABOUT_TO_RESTART,
    startGame,
    resumeGame,
    pauseGame,
    finishGame,
    prepareToRestart,
  };
};
