import { useEffect } from 'react';

import { cn } from '@/utils/classnames';
import { toMMSS } from '@/utils/formatTime';

const TIMER_SIZE = {
  sm: 'text-4xl md:text-6xl',
  md: 'text-6xl md:text-8xl',
  lg: 'text-8xl md:text-10xl',
} as const;
export interface TimerProps {
  time: number;
  onTimeEnd?: () => void;
  textStyle?: string;
  size?: keyof typeof TIMER_SIZE;
}

const Timer = ({ time, onTimeEnd, textStyle, size = 'md' }: TimerProps) => {
  useEffect(() => {
    if (time === 0) {
      onTimeEnd?.();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={cn(
        'select-none font-mono text-6xl font-semibold md:text-8xl',
        TIMER_SIZE[size],
        textStyle,
      )}
    >
      {toMMSS(time)}
    </div>
  );
};

export default Timer;
