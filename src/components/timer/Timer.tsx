import { useEffect } from 'react';

import { twMerge } from 'tailwind-merge';

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
    <div className={twMerge('select-none font-mono text-5xl font-semibold', textStyle)}>
      {toMMSS(time)}
    </div>
  );
};

export default Timer;
