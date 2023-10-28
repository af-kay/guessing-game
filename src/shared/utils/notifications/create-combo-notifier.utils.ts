import toast from 'react-hot-toast';
import { v4 as makeUuidV4 } from 'uuid';

type ToastMessage = string;
type ToastParams = NonNullable<Parameters<typeof toast>[1]>;
type ComboNotifierStrategy = 'decrease-by-duration' | 'decrease-batched';

type Params = {
  message: ToastMessage;
  icon?: ToastParams['icon'];
  duration?: ToastParams['duration'];
  position?: ToastParams['position'];
  strategy?: ComboNotifierStrategy;
};

export const createComboNotifier = ({
  message,
  icon,
  duration = 2500,
  position,
  strategy = 'decrease-batched',
}: Params) => {
  const id = makeUuidV4();

  let combo = 0;
  let timeoutComboDecrease: undefined | ReturnType<typeof setTimeout> =
    undefined;

  const decreaseCombo = () => {
    if (strategy === 'decrease-batched') {
      combo = 0;
    } else {
      combo = Math.max(0, combo - 1);
    }
  };

  const increaseCombo = () => combo++;

  const makeMessageConsideringCombo = (): ToastMessage => {
    const comboSuffix = combo > 1 ? ` (x${combo})` : '';

    return `${message}${comboSuffix}`;
  };

  return (messageOverride?: ToastMessage) => {
    if (messageOverride) {
      toast(messageOverride, { icon, id, duration, position });
    } else {
      if (strategy === 'decrease-batched') {
        clearTimeout(timeoutComboDecrease);
      }

      increaseCombo();
      timeoutComboDecrease = setTimeout(decreaseCombo, duration);

      toast(makeMessageConsideringCombo(), { icon, id, duration, position });
    }
  };
};
