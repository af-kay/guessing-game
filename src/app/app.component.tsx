import { Toaster } from 'react-hot-toast';

import { GuessingGame } from '../features/guessing-game';

export function App() {
  return (
    <>
      <GuessingGame />
      <Toaster position="bottom-right" />
    </>
  );
}
