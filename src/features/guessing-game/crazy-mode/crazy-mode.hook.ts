import { useCallback } from 'react';

import { useGuessingGame } from '../guessing-game.hook';

import { UseCrazyMode } from './crazy-mode.types';
import { useCrazyModeSideEffects } from './crazy-mode-side-effects';

export const useCrazyMode: UseCrazyMode = () => {
  const {
    config: { config, updateConfigWith },
  } = useGuessingGame();

  const isEnabled = config.crazyMode;


  const toggle = useCallback(() => {
    return updateConfigWith({ crazyMode: !config.crazyMode });
  }, [config.crazyMode, updateConfigWith]);

  useCrazyModeSideEffects(isEnabled);


  return {
    toggle,
    isEnabled,
  };
};
