import { ParticlesBgSwitchButtonStrategy } from './particles-bg-switch-button';
import { ParticlesVariant } from './variants/variants.types';

export type ParticlesBgConfig = {
  defaultVariant: ParticlesVariant;
  allowedOptions: ParticlesVariant[];
  switchButtonStrategy: ParticlesBgSwitchButtonStrategy;
  enableInteractivity: boolean;
};

export type IParticlesBg = {
  variant?: ParticlesVariant;
};
