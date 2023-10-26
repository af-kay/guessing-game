import toast, { ToastOptions } from 'react-hot-toast';
import { FaBrush } from 'react-icons/fa6';

export const notifyBg = (message: string, options?: ToastOptions) => {
  toast(message, {
    duration: 1200,
    id: 'particles-bg',
    icon: <FaBrush />,
    ...options,
  });
};
