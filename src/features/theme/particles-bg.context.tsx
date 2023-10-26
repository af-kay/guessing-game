import React, { useMemo, useState } from 'react';

import { ParticlesVariant } from './variants/variants.types';
import { THEME_BG_CONFIG } from './particles-bg.config';
import { PARTICLES_BG_LS_KEY } from './particles-bg.constants';
import { THEMES } from './variants/variants.constants';

import { useLocalStorage } from '$shared/hooks';
import { Theme } from '$shared/types';

export type ThemeContextType = {
  variant: ParticlesVariant;
  setVariant: (variant: ParticlesVariant) => void;
  theme: Theme;
};

export const ThemeContext = React.createContext(
  {} as ThemeContextType,
);

export const ThemeContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { initialLSValue: savedVariant } =
    useLocalStorage<ParticlesVariant>(PARTICLES_BG_LS_KEY);
  const [variant, setVariant] = useState(
    savedVariant ?? THEME_BG_CONFIG.defaultVariant,
  );

  const theme = useMemo(() => THEMES[variant], [variant]);

  return (
    <ThemeContext.Provider value={{ variant, setVariant, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
