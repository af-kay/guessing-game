import { IconType } from 'react-icons';
import {
  FaAppStore,
  FaChrome,
  FaDocker,
  FaFacebook,
  FaGithub,
  FaGitlab,
  FaGolang,
  FaJava,
  FaLinux,
  FaPython,
  FaQuestion,
  FaReact,
  FaRedhat,
  FaRust,
  FaSnapchat,
  FaTelegram,
  FaTiktok,
} from 'react-icons/fa6';

import { CardIconName } from './icon-card.types';

export const createFaIcon = (icon: CardIconName): IconType => {
  const converter: Record<CardIconName, IconType> = {
    [CardIconName.FB]: FaFacebook,
    [CardIconName.DOCKER]: FaDocker,
    [CardIconName.REACT]: FaReact,
    [CardIconName.RUST]: FaRust,
    [CardIconName.SNAPCHAT]: FaSnapchat,
    [CardIconName.TELEGRAM]: FaTelegram,
    [CardIconName.LINUX]: FaLinux,
    [CardIconName.GITHUB]: FaGithub,
    [CardIconName.REDHAT]: FaRedhat,
    [CardIconName.PYTHON]: FaPython,
    [CardIconName.APP_STORE]: FaAppStore,
    [CardIconName.TIKTOK]: FaTiktok,
    [CardIconName.JAVA]: FaJava,
    [CardIconName.GITLAB]: FaGitlab,
    [CardIconName.GOLANG]: FaGolang,
    [CardIconName.CHROME]: FaChrome,
  };

  return converter[icon];
};

export const createClosedIcon = (): IconType => FaQuestion;

