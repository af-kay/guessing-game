import { useCallback, useEffect, useMemo, useState } from 'react';
import { FaBrush, FaDownload } from 'react-icons/fa6';

import { useParticleBgOptions, useParticleBgVariant } from '../variants';
import { useThemeContext } from '../particles-bg.context.hook';
import { PARTICLES_BG_LS_KEY } from '../particles-bg.constants';
import { ParticlesVariant } from '../variants/variants.types';
import { THEME_BG_CONFIG } from '../particles-bg.config';
import { useParticleBgVariantQuery } from '../variants/variants.hook';

import { IParticlesBgSwitchButton } from './particles-bg-switch-button.types';
import { getBgSwitchFunction } from './particles-bg-switch-button.utils';

import { ButtonLayout } from '$shared/components';
import { useLocalStorage } from '$shared/hooks';

export const ThemeSwitchButton: React.FC<IParticlesBgSwitchButton> = ({
  strategy = THEME_BG_CONFIG.switchButtonStrategy,
}) => {
  const { updateLSValue } =
    useLocalStorage<ParticlesVariant>(PARTICLES_BG_LS_KEY);
  const options = useParticleBgOptions();
  const { variant, setVariant } = useThemeContext();
  const { isLoading } = useParticleBgVariant({ variant });

  const [nextVariant, setNextVariant] = useState<ParticlesVariant>();
  const { isLoading: isNextVariantLoading, data: nextVariantData } =
    useParticleBgVariantQuery({ variant: nextVariant, notify: false });

  const getNextVariant = useMemo(
    () => getBgSwitchFunction(strategy),
    [strategy],
  );

  const prepareForNextVariant = useCallback(() => {
    const nextVariant = getNextVariant(
      variant,
      options.map(o => o.value),
    );

    if (nextVariant) {
      setNextVariant(nextVariant);
      updateLSValue(nextVariant);
    }
  }, [getNextVariant, options, updateLSValue, variant]);

  useEffect(() => {
    if (nextVariantData && !isNextVariantLoading && nextVariant) {
      setVariant(nextVariant);
      setNextVariant(undefined);
    }
  }, [isNextVariantLoading, nextVariant, nextVariantData, setVariant]);

  return (
    <ButtonLayout
      onClick={prepareForNextVariant}
      isLoading={isLoading || isNextVariantLoading}
    >
      {isLoading || isNextVariantLoading
        ? `Loading ${nextVariant || variant}...`
        : `Theme: ${variant}`}{' '}
      {isLoading || isNextVariantLoading ? <FaDownload /> : <FaBrush />}
    </ButtonLayout>
  );
};
