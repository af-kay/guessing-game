import { useContext } from 'react';

import { ParticlesBgContext } from './particles-bg.context';

export const useParticlesBgContext = () => useContext(ParticlesBgContext);
