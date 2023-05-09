import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

import { useThemeContext } from '@/providers/ThemeProvider';
import { cn } from '@/utils/classnames';

const ThemeToggle = () => {
  const { theme, setTheme } = useThemeContext();

  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={cn(
        'rounded-full p-2 duration-200 hover:bg-gray-100  hover:text-primary-500',
        isDark ? 'text-white' : 'text-black',
      )}
    >
      {isDark ? <SunIcon className=' h-6 w-6' /> : <MoonIcon className='h-6 w-6' />}
    </button>
  );
};

export default ThemeToggle;
