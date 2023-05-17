import { useEffect } from 'react';

import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/classnames';
import { toMMSS } from '@/utils/formatTime';

const timerVariants = cva(['select-none font-mono font-semibold'], {
  variants: {
    size: {
      sm: 'text-4xl md:text-6xl',
      md: 'text-6xl md:text-8xl',
      lg: 'text-8xl md:text-10xl',
    },
  },
});

export interface TimerProps extends VariantProps<typeof timerVariants> {
  time: number;
  onTimeEnd?: () => void;
  textStyle?: string;
}

const Timer = ({ time, onTimeEnd, textStyle, size = 'md' }: TimerProps) => {
  useEffect(() => {
    if (time === 0) {
      onTimeEnd?.();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className={cn(timerVariants({ size, className: textStyle }))}>{toMMSS(time)}</div>;
};

export default Timer;
