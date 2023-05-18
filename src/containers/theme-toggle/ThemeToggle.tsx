import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import * as Switch from '@radix-ui/react-switch';

import { useThemeContext } from '@/providers/ThemeProvider';
import { cn } from '@/utils/classnames';

const ThemeToggle = ({ mode = 'toggle' }: { mode: 'switch' | 'toggle' }) => {
  const { theme, setTheme } = useThemeContext();

  const isDark = theme === 'dark';

  if (mode === 'switch') {
    return (
      <div className='flex items-center' style={{ display: 'flex', alignItems: 'center' }}>
        <label
          className='pr-[15px] text-[15px] leading-none text-gray-500 dark:text-gray-400'
          htmlFor='theme-mode'
        >
          Dark Mode
        </label>
        <Switch.Root
          className='relative h-[25px] w-[42px] cursor-default rounded-full bg-primary outline-none focus:shadow-black data-[state=checked]:bg-primary-200'
          id='theme-mode'
          defaultChecked={isDark}
          onCheckedChange={() => setTheme(isDark ? 'light' : 'dark')}
        >
          <Switch.Thumb className='block h-[21px] w-[21px] translate-x-0.5 rounded-full bg-white transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[19px]' />
        </Switch.Root>
      </div>
    );
  }

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
