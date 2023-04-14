import { twMerge } from 'tailwind-merge';

import { Button } from '@/components/base';
import Timer from '@/components/timer';

type PomodoroTimerVariant = 'break' | 'focus' | 'longBreak';

type PomodoroTimerProps = {
  variant: PomodoroTimerVariant;
};

const VARIANTS_STYLE = {
  break: 'bg-blue-050 text-blue-800',
  focus: 'text-primary-800 dark:text-primary-200',
  longBreak: 'bg-green-050 text-green-800',
};

const PomodoroTimer = ({ variant }: PomodoroTimerProps) => {
  return (
    <div className='space-y-2'>
      <div
        className={twMerge(
          'mx-auto grid max-w-xl place-items-center rounded-lg border-2 border-gray-200 bg-white py-8 dark:border-gray-400 dark:bg-bg-dark',
          VARIANTS_STYLE[variant],
        )}
      >
        <Timer time={1200} />
      </div>
      <Button className='w-full'>Start</Button>
    </div>
  );
};

export default PomodoroTimer;
