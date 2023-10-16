export enum CardIconName {
  FB = 'facebook',
  DOCKER = 'docker',
  REACT = 'react',
  RUST = 'rust',
  SNAPCHAT = 'snapchat',
  TELEGRAM = 'telegram',
  LINUX = 'linux',
  GITHUB = 'github',
  REDHAT = 'redhat',
  PYTHON = 'python',
  APP_STORE = 'app_store',
  TIKTOK = 'tiktok',
  JAVA = 'java',
  GITLAB = 'gitlab',
  GOLANG = 'golang',
  CHROME = 'chrome',
}

export type IconCardAnimationType = 'shake' | 'infinite-shake';

export type IIconCard = {
  iconName: CardIconName;
  isClosed: boolean;
  highlightColor?: string;
  animation?: IconCardAnimationType;
  bgColor: string;
  iconColor: string;
  onClick: () => void;
};
