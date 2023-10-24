import { ParticlesVariant } from './variants/variants.types';

export type ParticlesBgConfig = {
  defaultVariant: ParticlesVariant;
  allowedOptions: ParticlesVariant[];
};

export type IParticlesBg = {
  variant?: ParticlesVariant;
};
