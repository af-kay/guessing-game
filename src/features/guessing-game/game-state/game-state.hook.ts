import { useState } from 'react';

import { GuessingGameSessionState } from '../guessing-game.types';

import {
  canFinishGame,
  canPauseGame,
  canResumeGame,
  canStartGame,
} from './game-state.utils';
import { UseGameState } from './game-state.types';

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

  return {
    isIdle: gameState === GuessingGameSessionState.NOT_STARTED,
    isRunning: gameState === GuessingGameSessionState.IN_PROGRESS,
    isPaused: gameState === GuessingGameSessionState.PAUSED,
    isFinished: gameState === GuessingGameSessionState.DONE,
    startGame,
    resumeGame,
    pauseGame,
    finishGame,
  };
};
