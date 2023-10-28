import { useCallback, useState } from 'react';

import { GuessingGameConfig, UseGameConfig } from './game-config.types';
import { DEFAULT_GUESSING_GAME_CONFIG } from './guessing-game.constants';

export const useGameConfig: UseGameConfig = () => {
  const [config, setConfig] = useState(DEFAULT_GUESSING_GAME_CONFIG);

  const updateConfigWith = useCallback(
    (updates: Partial<GuessingGameConfig>) => {
      setConfig(prev => ({
        ...prev,
        ...updates,
      }));
    },
    [],
  );

  return { config, updateConfigWith };
};
