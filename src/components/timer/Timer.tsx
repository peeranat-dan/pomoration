import { useEffect } from 'react';

import { cn } from '@/utils/classnames';
import { toMMSS } from '@/utils/formatTime';

export interface TimerProps {
  time: number;
  onTimeEnd?: () => void;
  textStyle?: string;
}

const Timer = ({ time, onTimeEnd, textStyle }: TimerProps) => {
  useEffect(() => {
    if (time === 0) {
      onTimeEnd?.();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={cn('select-none font-mono text-6xl font-semibold md:text-8xl', textStyle)}>
      {toMMSS(time)}
    </div>
  );
};

export default Timer;
