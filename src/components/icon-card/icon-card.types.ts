export enum CardIconName {
  FB = 'facebook',
  DOCKER = 'docker',
  REACT = 'react',
  RUST = 'rust',
  SNAPCHAT = 'snapchat',
  TELEGRAM = 'telegram',
  PEACE = 'peace',
  LINUX = 'linux',
}

export type IconCardAnimationType = 'shake' | 'infinite-shake';

export type IIconCard = {
  iconName: CardIconName;
  isClosed: boolean;
  animation?: IconCardAnimationType;
  bgColor: string;
  iconColor: string;
  onClick: () => void;
};
