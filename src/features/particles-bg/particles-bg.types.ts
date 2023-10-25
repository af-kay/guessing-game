import { ParticlesVariant } from './variants/variants.types';

export type ParticlesBgConfig = {
  defaultVariant: ParticlesVariant;
  allowedOptions: ParticlesVariant[];
  enableInteractivity: boolean;
};

export type IParticlesBg = {
  variant?: ParticlesVariant;
};
