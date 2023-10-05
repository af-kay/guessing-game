import { IconType } from 'react-icons';
import {
  FaDocker,
  FaFacebook,
  FaLinux,
  FaPaperPlane,
  FaPeace,
  FaQuestion,
  FaReact,
  FaRust,
  FaSnapchat,
} from 'react-icons/fa6';

import { CardIconName } from './icon-card.types';

export const createFaIcon = (icon: CardIconName): IconType => {
  const converter: Record<CardIconName, IconType> = {
    [CardIconName.FB]: FaFacebook,
    [CardIconName.DOCKER]: FaDocker,
    [CardIconName.REACT]: FaReact,
    [CardIconName.RUST]: FaRust,
    [CardIconName.SNAPCHAT]: FaSnapchat,
    [CardIconName.TELEGRAM]: FaPaperPlane,
    [CardIconName.PEACE]: FaPeace,
    [CardIconName.LINUX]: FaLinux,
  };

  return converter[icon];
};

export const createClosedIcon = (): IconType => FaQuestion;

