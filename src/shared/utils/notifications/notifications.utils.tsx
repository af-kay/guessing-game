import { FaBug, FaInfo, FaTerminal } from 'react-icons/fa6';

import { createNotifier } from './create-notifier';
import { NotifyLevel } from './notifications.types';

export const notify = createNotifier({ icon: FaInfo, level: NotifyLevel.INFO });

export const notifyTrace = createNotifier({
  icon: FaTerminal,
  level: NotifyLevel.TRACE,
});

export const notifyDebug = createNotifier({
  icon: FaBug,
  level: NotifyLevel.DEBUG,
});

export const notifyWarn = createNotifier({
  icon: FaBug,
  level: NotifyLevel.WARN,
});

export const notifyError = createNotifier({
  icon: FaBug,
  level: NotifyLevel.ERROR,
});
