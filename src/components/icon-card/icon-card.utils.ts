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

import { CardIcon, CardState } from './icon-card.types';

export const createFaIcon = (icon: CardIcon): IconType => {
  const converter: Record<CardIcon, IconType> = {
    [CardIcon.FB]: FaFacebook,
    [CardIcon.DOCKER]: FaDocker,
    [CardIcon.REACT]: FaReact,
    [CardIcon.RUST]: FaRust,
    [CardIcon.SNAPCHAT]: FaSnapchat,
    [CardIcon.TELEGRAM]: FaPaperPlane,
    [CardIcon.PEACE]: FaPeace,
    [CardIcon.LINUX]: FaLinux,
  };

  return converter[icon];
};

export const createClosedIcon = (): IconType => FaQuestion;

export const getIconStateColor = (state: CardState): string => {
  const converter: Record<CardState, string> = {
    [CardState.CLOSED]: 'grey',
    [CardState.PICKED]: 'lightblue',
    [CardState.GUESSED]: 'lightgreen',
    [CardState.GUESSED_WRONG]: 'indianred',
    [CardState.OPENED]: 'lightgrey',
  };

  return converter[state];
};
