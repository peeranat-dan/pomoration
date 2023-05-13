import { Button } from '@/components/base';
import Timer from '@/components/timer';
import type { PomodoroMode } from '@/types/pomodoro';
import { cn } from '@/utils/classnames';
import { usePomodoroTimer } from '@/utils/usePomodoroTimer';

const VARIANTS_STYLE: Record<PomodoroMode, string> = {
  shortBreak: 'bg-blue-050 text-blue-800',
  focus: 'text-primary dark:text-primary-200',
  longBreak: 'bg-green-050 text-green-800',
} as const;

const VARIANTS_TITLE: Record<PomodoroMode, string> = {
  shortBreak: 'Break',
  focus: 'Focus',
  longBreak: 'Long Break',
} as const;

const PomodoroTimer = () => {
  const { timeLeft, isRunning, mode, pomodoroCount, startTimer, pauseTimer } = usePomodoroTimer();
  return (
    <div
      className={cn(
        'mx-auto flex items-center justify-center gap-4 rounded-lg border-2 border-gray-200 bg-bg-light px-4 py-8 dark:border-gray-400 dark:bg-bg-dark md:gap-2',
        VARIANTS_STYLE[mode],
      )}
    >
      <div className='space-y-4 text-center'>
        <div>
          <Timer time={timeLeft} />
          <div className='text-lg'>{VARIANTS_TITLE[mode]}</div>
          <div className='text-base'>{pomodoroCount}</div>
        </div>
        {isRunning ? (
          <Button className='w-full' onClick={pauseTimer}>
            Pause
          </Button>
        ) : (
          <Button className='w-full' onClick={startTimer}>
            Start
          </Button>
        )}
      </div>
    </div>
  );
};

export default PomodoroTimer;
