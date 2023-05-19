import { useEffect } from 'react';

import { Button } from '@/components/base';
import Timer from '@/components/timer';
import type { PomodoroMode } from '@/types/pomodoro';
import { cn } from '@/utils/classnames';
import { env } from '@/utils/config';
import { toMMSS } from '@/utils/formatTime';
import { usePomodoroTimer } from '@/utils/usePomodoroTimer';

const VARIANTS_STYLE: Record<PomodoroMode, string> = {
  shortBreak: 'bg-blue-050 text-blue-800',
  focus: 'text-black dark:text-gray-200',
  longBreak: 'bg-green-050 text-green-800',
} as const;

const VARIANTS_TITLE: Record<PomodoroMode, string> = {
  shortBreak: 'Break',
  focus: 'Focus',
  longBreak: 'Long Break',
} as const;

const PomodoroTimer = () => {
  const { timeLeft, isRunning, mode, startTimer, pauseTimer } = usePomodoroTimer();
  useEffect(() => {
    document.title = `${toMMSS(timeLeft)} - ${VARIANTS_TITLE[mode]} | ${env.appName}`;
  }, [timeLeft, mode]);
  return (
    <div
      className={cn(
        'mx-auto flex select-none items-center justify-center gap-4 rounded-lg py-4 md:gap-2',
        VARIANTS_STYLE[mode],
      )}
    >
      <div className='space-y-4 text-center'>
        <div>
          <Timer time={timeLeft} />
          <div className='text-lg'>{VARIANTS_TITLE[mode]}</div>
        </div>
        {isRunning ? (
          <Button color='red' className='w-full' onClick={pauseTimer}>
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
