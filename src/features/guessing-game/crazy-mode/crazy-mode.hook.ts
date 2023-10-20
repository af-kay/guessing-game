import { useCallback } from 'react';

import { useGuessingGame } from '../guessing-game.hook';

import { UseCrazyMode } from './crazy-mode.types';

export const useCrazyMode: UseCrazyMode = () => {
  const {
    config: { config, updateConfigWith },
  } = useGuessingGame();

  const toggle = useCallback(() => {
    return updateConfigWith({ crazyMode: !config.crazyMode });
  }, [config.crazyMode, updateConfigWith]);

  return {
    toggle,
    isEnabled: config.crazyMode,
  };
};
