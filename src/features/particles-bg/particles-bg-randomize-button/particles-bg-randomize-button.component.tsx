import { useCallback } from 'react';
import { FaBrush } from 'react-icons/fa6';
import toast from 'react-hot-toast';

import { useParticleBgOptions, useParticleBgVariant } from '../variants';
import { useParticlesBgContext } from '../particles-bg.context';
import { PARTICLES_BG_LS_KEY } from '../particles-bg.constants';
import { ParticlesVariant } from '../variants/variants.types';

import { ButtonLayout } from '$shared/components';
import { getRandomArrayItem } from '$shared/utils';
import { useLocalStorage } from '$shared/hooks';

export const ParticlesBgRandomizeButton = () => {
  const { updateLSValue } =
    useLocalStorage<ParticlesVariant>(PARTICLES_BG_LS_KEY);
  const options = useParticleBgOptions();
  const { variant, setVariant } = useParticlesBgContext();
  const { isLoading } = useParticleBgVariant(variant);

  const setRandomVariant = useCallback(() => {
    const otherVariants = options.filter(option => option.value !== variant);
    const randomVariant = getRandomArrayItem(otherVariants)?.value;

    if (randomVariant) {
      toast(`Installing background "${randomVariant}"...`, {
        duration: 5000,
        id: 'particles-bg-install',
      });
      setVariant(randomVariant);
      updateLSValue(randomVariant);
    }
  }, [options, variant, setVariant, updateLSValue]);

  return (
    <ButtonLayout onClick={setRandomVariant} isLoading={isLoading}>
      Background: {variant} <FaBrush />
    </ButtonLayout>
  );
};
