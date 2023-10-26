import { useContext } from 'react';

import { ThemeContext } from './particles-bg.context';

export const useThemeContext = () => useContext(ThemeContext);
