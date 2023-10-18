import { IconType } from 'react-icons';

import { NotifyLevel } from '../notifications.types';

export type ICreateNotifier = {
  icon: IconType;
  level: NotifyLevel;
  requirePrefix?: boolean;
};
