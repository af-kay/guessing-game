import { UseQueryResult } from '@tanstack/react-query';
import { ISourceOptions } from 'tsparticles-engine';

import { OptionType } from '$shared/types';

export enum ParticlesVariant {
  SNOW = 'snow.json',
  NYAN_CAT = 'nyan-cat.json',
  AMOGUS = 'amogus.json',
  SPARKLES = 'sparkles.json',
  NASA = 'nasa.json',
  COLLISION = 'collision.json',
  TRIANGLES = 'triangles.json',
}

export type ParticlesBgOptions = ISourceOptions;

export type UseLoadParticleBgVariant = (
  variant: ParticlesVariant,
) => UseQueryResult<undefined | ParticlesBgOptions>;

export type UseParticleBgOptions = () => OptionType<ParticlesVariant>[];
