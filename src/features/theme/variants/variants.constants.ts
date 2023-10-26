import { ParticlesVariant } from './variants.types';

import { Theme } from '$shared/types';

export const THEMES: Record<ParticlesVariant, Theme> = {
  [ParticlesVariant.SNOW]: {
    BOARD: {
      BG: ['#607fbd', '#335dac'],
    },
  },
  [ParticlesVariant.NYAN_CAT]: {
    BOARD: {
      BG: ['#0c4883', '#382986'],
    },
  },
  [ParticlesVariant.AMOGUS]: {
    BOARD: {
      BG: ['#3e3e3e', '#363636']
    },
  },
  [ParticlesVariant.SPARKLES]: {
    BOARD: {
      BG: ['#8686ab', '#7070aa'],
    },
  },
  [ParticlesVariant.NASA]: {
    BOARD: {
      BG: ['#56569d', '#545e9c'],
    },
  },
  [ParticlesVariant.COLLISION]: {
    BOARD: {
      BG: ['#1e3c75', '#474687'],
    },
  },
  [ParticlesVariant.TRIANGLES]: {
    BOARD: {
      BG: ['#2e3469', '#233182'],
    },
  },
};
