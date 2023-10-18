import toast from 'react-hot-toast';

import { DEV_PROTECTED_NOTIFY_LEVELS } from './create-notifier.constants';
import { ICreateNotifier } from './create-notifier.types';

export const createNotifier = ({
  icon: Icon,
  level,
  requirePrefix = false,
}: ICreateNotifier) => {
  const isDevProtectedLevel = DEV_PROTECTED_NOTIFY_LEVELS.includes(level);

  const notify = (message: string) => {
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
