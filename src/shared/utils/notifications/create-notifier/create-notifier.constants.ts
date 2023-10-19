import { IconType } from 'react-icons';
import { FaBomb, FaBug, FaInfo } from 'react-icons/fa6';

import { NotifyLevel } from '../notifications.types';

export const DEV_PROTECTED_NOTIFY_LEVELS: Array<NotifyLevel> = [
  NotifyLevel.DEV,
];

export const DEFAULT_NOTIFY_ICONS: Record<NotifyLevel, IconType> = {
  [NotifyLevel.DEV]: FaBug,
  [NotifyLevel.INFO]: FaInfo,
  [NotifyLevel.ERROR]: FaBomb,
};
