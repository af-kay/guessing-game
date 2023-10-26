import { ParticlesVariant } from './variants.types';

import { Theme } from '$shared/types';

export const THEMES: Record<ParticlesVariant, Theme> = {
  [ParticlesVariant.SNOW]: {
    BOARD: {
      BG: ['#607fbd', '#335dac'],
    },
    ICON_CARD: {
      CLOSED: '#b8b8b8',
    },
  },
  [ParticlesVariant.NYAN_CAT]: {
    BOARD: {
      BG: ['#0c4883', '#382986'],
    },
    ICON_CARD: {
      CLOSED: '#5e7ea1',
    },
  },
  [ParticlesVariant.AMOGUS]: {
    BOARD: {
      BG: 'transparent',
    },
    ICON_CARD: {
      CLOSED: 'transparent',
    },
  },
  [ParticlesVariant.SPARKLES]: {
    BOARD: {
      BG: ['#8686ab', '#7070aa'],
    },
    ICON_CARD: {
      CLOSED: '#a7a7c4',
    },
  },
  [ParticlesVariant.NASA]: {
    BOARD: {
      BG: ['#56569d', '#545e9c'],
    },
    ICON_CARD: {},
  },
  [ParticlesVariant.COLLISION]: {
    BOARD: {
      BG: ['#1e3c75', '#474687'],
    },
    ICON_CARD: {},
  },
  [ParticlesVariant.TRIANGLES]: {
    BOARD: {
      BG: ['#2e3469', '#233182'],
    },
    ICON_CARD: {},
  },
};
