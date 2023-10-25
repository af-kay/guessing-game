import { useCallback, useMemo } from 'react';
import toast from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';

import { PARTICLES_BG_CONFIG } from '../particles-bg.config';

import {
  ParticlesBgOptions,
  UseLoadParticleBgVariant,
  UseParticleBgOptions,
} from './variants.types';

export const useParticleBgVariant: UseLoadParticleBgVariant = variant => {
  const loadParticles = useCallback(async () => {
    const loadedOptions: undefined | ParticlesBgOptions = await fetch(
      `./assets/ts-particles/${variant}`,
    ).then(res => res.json());

    const interactivity = PARTICLES_BG_CONFIG.enableInteractivity
      ? loadedOptions?.interactivity
      : undefined;

    toast(`Background "${variant}" installed!`, {
      duration: 1200,
      id: 'particles-bg-install',
    });

    return {
      ...loadedOptions,
      interactivity,
    };
  }, [variant]);

  return useQuery<undefined | ParticlesBgOptions>({
    queryKey: ['BG_VARIANT', variant],
    queryFn: loadParticles,
    retry: false,
    throwOnError: error => {
      toast(`Error installing background "${variant}"!\n(${error.message})`, {
        id: 'particles-bg-install',
      });

      return false;
    },
  });
};

export const useParticleBgOptions: UseParticleBgOptions = () => {
  return useMemo(
    () =>
      PARTICLES_BG_CONFIG.allowedOptions.map(option => ({
        value: option,
        label: String(option),
      })),
    [],
  );
};
