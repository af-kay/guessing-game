import toast from 'react-hot-toast';

import { DEFAULT_NOTIFY_ICONS, DEV_PROTECTED_NOTIFY_LEVELS } from './create-notifier.constants';
import {
  ICreateNotifier,
  ICreatePrefixedNotifier,
} from './create-notifier.types';

export const createNotifier = ({
  icon: RequestedIcon,
  level,
  requirePrefix = false,
}: ICreateNotifier) => {
  const isDevProtectedLevel = DEV_PROTECTED_NOTIFY_LEVELS.includes(level);
  const Icon = RequestedIcon ?? DEFAULT_NOTIFY_ICONS[level];

  const notify = (message: string) => {
    console.log(message, isDevProtectedLevel, IS_DEV_MODE);
    if (isDevProtectedLevel && !IS_DEV_MODE) {
      return;
    }

    toast(message, { icon: <Icon /> });
  };

  if (requirePrefix) {
    return (prefix: string, message: string) => {
      return notify(`${prefix}: ${message}`);
    };
  } else {
    return notify;
  }
};

export const createPrefixedNotifier = ({
  level,
  prefix,
  icon,
}: ICreatePrefixedNotifier) => {
  const notify = createNotifier({ icon, requirePrefix: true, level });

  return (message: string) => {
    notify(prefix, message);
  };
};
