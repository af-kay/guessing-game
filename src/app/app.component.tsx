import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

import { GuessingGame } from '../features/guessing-game';

import {
  ThemeContextProvider,
  ParticlesBgSwitchButton,
} from '$features/theme';

// FIXME: laziness does not work because of named and default exports mixing
const LazyParticlesBg = React.lazy(() => import('$features/theme'));

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnMount: false } },
});

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <GuessingGame additionalButtons={[<ParticlesBgSwitchButton />]} />

        <Toaster position="top-center" reverseOrder />
        <LazyParticlesBg />
      </ThemeContextProvider>
    </QueryClientProvider>
  );
}
