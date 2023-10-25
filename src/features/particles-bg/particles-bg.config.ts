import { ParticlesBgConfig } from './particles-bg.types';
import { ParticlesVariant } from './variants/variants.types';

export const PARTICLES_BG_CONFIG: ParticlesBgConfig = {
  defaultVariant: ParticlesVariant.NYAN_CAT,
  allowedOptions: Object.values(ParticlesVariant).sort(),
  switchButtonStrategy: 'next',
  enableInteractivity: false,
};
