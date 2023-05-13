import { useState, useEffect } from 'react';

import type { PomodoroMode } from '@/types/pomodoro';

export const usePomodoroTimer = (
  focusDuration = 25,
  shortBreakDuration = 5,
  longBreakDuration = 15,
  longBreakInterval = 4,
) => {
  const [timeLeft, setTimeLeft] = useState<number>(focusDuration * 60);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [mode, setMode] = useState<PomodoroMode>('focus');
  const [pomodoroCount, setPomodoroCount] = useState<number>(0);

  useEffect(() => {
    let intervalId: NodeJS.Timer;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);
    }

    if (timeLeft === 0) {
      setIsRunning(false);

      if (mode === 'focus') {
        setPomodoroCount((prevPomodoroCount) => {
          const nextPomodoroCount = prevPomodoroCount + 1;
          if (nextPomodoroCount % longBreakInterval === 0 && pomodoroCount !== 0) {
            setMode('longBreak');
            setTimeLeft(longBreakDuration * 60);
          } else {
            setMode('shortBreak');
            setTimeLeft(shortBreakDuration * 60);
          }
          return prevPomodoroCount + 1;
        });
      } else {
        setMode('focus');
        setTimeLeft(focusDuration * 60);
      }

      //   if (pomodoroCount % longBreakInterval === 0 && pomodoroCount !== 0) {
      //     setMode('longBreak');
      //     setTimeLeft(longBreakDuration * 60);
      //   } else if (mode === 'focus') {
      //     setMode('shortBreak');
      //     setTimeLeft(shortBreakDuration * 60);
      //   } else {
      //     setMode('focus');
      //     setTimeLeft(focusDuration * 60);
      //   }
    }

    return () => clearInterval(intervalId);
  }, [
    isRunning,
    timeLeft,
    focusDuration,
    shortBreakDuration,
    longBreakDuration,
    longBreakInterval,
    mode,
    pomodoroCount,
  ]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setMode('focus');
    setPomodoroCount(0);
    setTimeLeft(focusDuration * 60);
  };

  return {
    timeLeft,
    isRunning,
    mode,
    pomodoroCount,
    startTimer,
    pauseTimer,
    resetTimer,
  };
};
