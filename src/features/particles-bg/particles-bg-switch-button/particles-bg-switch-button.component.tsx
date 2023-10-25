import { useCallback, useMemo } from 'react';
import { FaBrush } from 'react-icons/fa6';

import { useParticleBgOptions, useParticleBgVariant } from '../variants';
import { useParticlesBgContext } from '../particles-bg.context';
import { PARTICLES_BG_LS_KEY } from '../particles-bg.constants';
import { ParticlesVariant } from '../variants/variants.types';
import { notifyBg } from '../variants/variants.utils';

import { IParticlesBgSwitchButton } from './particles-bg-switch-button.types';
import { getBgSwitchFunction } from './particles-bg-switch-button.utils';

import { ButtonLayout } from '$shared/components';
import { useLocalStorage } from '$shared/hooks';

export const ParticlesBgSwitchButton: React.FC<IParticlesBgSwitchButton> = ({
  strategy = 'next',
}) => {
  const { updateLSValue } =
    useLocalStorage<ParticlesVariant>(PARTICLES_BG_LS_KEY);
  const options = useParticleBgOptions();
  const { variant, setVariant } = useParticlesBgContext();
  const { isLoading } = useParticleBgVariant(variant);

  const getNextVariant = useMemo(
    () => getBgSwitchFunction(strategy),
    [strategy],
  );

  const setNextVariant = useCallback(() => {
    const nextVariant = getNextVariant(
      variant,
      options.map(o => o.value),
    );

    if (nextVariant) {
      notifyBg(`Installing background "${nextVariant}"...`, {
        duration: 5000,
      });
      setVariant(nextVariant);
      updateLSValue(nextVariant);
    }
  }, [getNextVariant, options, setVariant, updateLSValue, variant]);

  return (
    <ButtonLayout onClick={setNextVariant} isLoading={isLoading}>
      Background: {variant} <FaBrush />
    </ButtonLayout>
  );
};
