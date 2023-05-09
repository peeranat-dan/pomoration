import { Button } from '@/components/base';
import Timer from '@/components/timer';
import { cn } from '@/utils/classnames';

type PomodoroTimerVariant = 'break' | 'focus' | 'longBreak';

type PomodoroTimerProps = {
  variant: PomodoroTimerVariant;
};

const VARIANTS_STYLE = {
  break: 'bg-blue-050 text-blue-800',
  focus: 'text-primary-800 dark:text-primary-200',
  longBreak: 'bg-green-050 text-green-800',
};

// const VARIANTS_TIME = {
//   break: 300,
//   focus: 1200,
//   longBreak: 900,
// };

const VARIANTS_TITLE = {
  break: 'Break',
  focus: 'Focus',
  longBreak: 'Long Break',
};

const PomodoroTimer = ({ variant }: PomodoroTimerProps) => {
  return (
    <div className='space-y-2'>
      <div
        className={cn(
          'mx-auto flex items-center justify-center gap-4 rounded-lg border-2 border-gray-200 bg-bg-light px-4 py-8 dark:border-gray-400 dark:bg-bg-dark md:gap-2',
          VARIANTS_STYLE[variant],
        )}
      >
        <div className='grid place-items-center gap-2 text-center'>
          <div>
            <Timer time={1200} />
            <div className='text-lg'>{VARIANTS_TITLE[variant]}</div>
          </div>
          <Button className='w-full md:w-1/2'>Start</Button>
        </div>
      </div>
    </div>
  );
};

export default PomodoroTimer;
