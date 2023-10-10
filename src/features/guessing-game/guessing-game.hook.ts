import { useContext } from 'react';

import { GuessingGameContext } from './guessing-game.context';

export const useGuessingGame = () => useContext(GuessingGameContext);
