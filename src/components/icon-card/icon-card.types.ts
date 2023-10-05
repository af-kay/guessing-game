export enum CardState {
  CLOSED = 'closed',
  PICKED = 'picked',
  GUESSED = 'guessed',
  GUESSED_WRONG = 'guessed_wrong',
  OPENED = 'opened',
}

export enum CardIcon {
  FB = 'facebook',
  DOCKER = 'docker',
  REACT = 'react',
  RUST = 'rust',
  SNAPCHAT = 'snapchat',
  TELEGRAM = 'telegram',
  PEACE = 'peace',
  LINUX = 'linux',
}

export type IIconCard = {
  icon: CardIcon;
  state: CardState;
  onClick: () => void;
};
