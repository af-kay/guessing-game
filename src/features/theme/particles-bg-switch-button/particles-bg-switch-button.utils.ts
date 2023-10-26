import { ParticlesVariant } from '../variants/variants.types';

import { ParticlesBgSwitchButtonStrategy } from './particles-bg-switch-button.types';

import { getRandomArrayItem } from '$shared/utils';

type BgSwitchFunction = (
  currentBackground: ParticlesVariant,
  availableBackgrounds: ParticlesVariant[],
) => ParticlesVariant;

export const getBgSwitchFunction = (
  strategy: ParticlesBgSwitchButtonStrategy,
) => {
  const converter: Record<ParticlesBgSwitchButtonStrategy, BgSwitchFunction> = {
    random: (currentBackground, availableBackgrounds) => {
      const otherBackgrounds = availableBackgrounds.filter(
        bg => bg !== currentBackground,
      );

      return getRandomArrayItem(otherBackgrounds)!;
    },
    next: (currentBackground, availableBackgrounds) => {
      const nextBgIndex = (() => {
        const currentBgIndex = availableBackgrounds.findIndex(
          bg => bg === currentBackground,
        );
        const isCurrentBgLastArrayElement =
          currentBgIndex === availableBackgrounds.length - 1;

        return isCurrentBgLastArrayElement ? 0 : currentBgIndex + 1;
      })();

      return availableBackgrounds[nextBgIndex];
    },
  };

  return converter[strategy];
};
