import ReactConfetti from 'react-confetti';

import { IConfetti } from './confetti.types';

export const Confetti: React.FC<IConfetti> = ({ width, height, playOnce = true }) => {
  return <ReactConfetti width={width} height={height} recycle={!playOnce} gravity={.75} />;
};
