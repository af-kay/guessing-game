import { useContext } from 'react';

import { GuessingGameContext } from './guessing-game.context.provider';

export const useGuessingGame = () => useContext(GuessingGameContext);
