import { useCallback, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';

import { PARTICLES_BG_CONFIG } from '../particles-bg.config';

import {
  ParticlesBgOptions,
  UseLoadParticleBgVariant,
  UseParticleBgOptions,
} from './variants.types';
import { notifyBg } from './variants.utils';

export const useParticleBgVariantQuery: UseLoadParticleBgVariant = ({
  variant,
  notify = true,
}) => {
  const loadParticles = useCallback(async () => {
    const loadedOptions: undefined | ParticlesBgOptions = await fetch(
      `./assets/ts-particles/${variant}`,
    ).then(res => res.json());

    const interactivity = PARTICLES_BG_CONFIG.enableInteractivity
      ? loadedOptions?.interactivity
      : undefined;

    if (notify) {
      notifyBg(`Background "${variant}" installed!`);
    }

    return {
      ...loadedOptions,
      interactivity,
    };
  }, [notify, variant]);

  return useQuery<undefined | ParticlesBgOptions>({
    queryKey: ['BG_VARIANT', variant],
    enabled: Boolean(variant),
    queryFn: loadParticles,
    retry: false,
    throwOnError: error => {
      if (notify) {
        notifyBg(
          `Error installing background "${variant}"!\n(${error.message})`,
        );
      }

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
