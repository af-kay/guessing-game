import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

import { GuessingGame } from '../features/guessing-game';

import {
  ParticlesBgContextProvider,
  ParticlesBgRandomizeButton,
} from '$features/particles-bg';

const LazyParticlesBg = React.lazy(() => import('$features/particles-bg'));

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnMount: false } },
});

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ParticlesBgContextProvider>
        <GuessingGame additionalButtons={[<ParticlesBgRandomizeButton />]} />

        <Toaster position="top-center" reverseOrder />
        <LazyParticlesBg />
      </ParticlesBgContextProvider>
    </QueryClientProvider>
  );
}
