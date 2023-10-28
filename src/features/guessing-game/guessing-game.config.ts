import { GuessingGameFeatureConfig } from './guessing-game.types';

import { createFeatureFlagProtectedFC, devProtected } from '$shared/utils';

const guessingGameFeatureConfig: GuessingGameFeatureConfig = {
  restartGameButton: true,
  configureGameButton: devProtected(true) ?? false,
};

export const guessingGameFeatureFlagProtectedFC = createFeatureFlagProtectedFC(
  guessingGameFeatureConfig,
);
