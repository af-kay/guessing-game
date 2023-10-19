import { createNotifier } from './create-notifier';
import { NotifyLevel } from './notifications.types';

export const notify = createNotifier({ level: NotifyLevel.INFO });

export const notifyDev = createNotifier({
  level: NotifyLevel.DEV,
});

export const notifyError = createNotifier({
  level: NotifyLevel.ERROR,
});
