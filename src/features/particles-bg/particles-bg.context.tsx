import React, { useState } from 'react';

import { ParticlesVariant } from './variants/variants.types';
import { PARTICLES_BG_CONFIG } from './particles-bg.config';
import { PARTICLES_BG_LS_KEY } from './particles-bg.constants';

import { useLocalStorage } from '$shared/hooks';

export type ParticlesBgContextType = {
  variant: ParticlesVariant;
  setVariant: (variant: ParticlesVariant) => void;
};

export const ParticlesBgContext = React.createContext(
  {} as ParticlesBgContextType,
);

export const ParticlesBgContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { initialLSValue: savedVariant } =
    useLocalStorage<ParticlesVariant>(PARTICLES_BG_LS_KEY);
  const [variant, setVariant] = useState(
    savedVariant ?? PARTICLES_BG_CONFIG.defaultVariant,
  );

  return (
    <ParticlesBgContext.Provider
      value={{ variant, setVariant }}
    >
      {children}
    </ParticlesBgContext.Provider>
  );
};
