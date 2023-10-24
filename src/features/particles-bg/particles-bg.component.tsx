import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import type { Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

import { useParticleBgVariant } from './variants';
import { useParticlesBgContext } from './particles-bg.context';

export const ParticlesBg = React.memo(() => {
  const { variant } = useParticlesBgContext();

  const { data } = useParticleBgVariant(variant);

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  return <Particles id="tsparticles" init={particlesInit} options={data} />;
});
