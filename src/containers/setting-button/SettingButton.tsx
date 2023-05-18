import { Cog6ToothIcon, XMarkIcon } from '@heroicons/react/24/outline';
import * as Dialog from '@radix-ui/react-dialog';

import { Button } from '@/components/base';
import { useThemeContext } from '@/providers/ThemeProvider';
import { cn } from '@/utils/classnames';

import ThemeToggle from '../theme-toggle/ThemeToggle';

const SettingButton = () => {
  const { theme } = useThemeContext();

  const isDark = theme === 'dark';
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          className={cn(
            'rounded-full p-2 duration-200 hover:bg-gray-100  hover:text-primary-500',
            isDark ? 'text-white' : 'text-black',
          )}
        >
          <Cog6ToothIcon className='h-6 w-6' />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 bg-black/30 data-[state=open]:animate-overlayShow' />
        <Dialog.Content className='fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] space-y-4 rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow dark:bg-bg-dark'>
          <Dialog.Title className='text-[20px] font-medium text-black'>Setting</Dialog.Title>
          <ThemeToggle mode='switch' />
          <div className='flex justify-end'>
            <Dialog.Close asChild>
              <Button>Close</Button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button
              className='absolute right-[10px] top-[10px] inline-flex appearance-none items-center justify-center rounded-full p-1 text-primary duration-100 hover:bg-primary-100 focus:shadow-[0_0_0_2px] focus:outline-none'
              aria-label='Close'
            >
              <XMarkIcon className='h-6 w-6' />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default SettingButton;
