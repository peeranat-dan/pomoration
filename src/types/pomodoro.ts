import type { defaultPomodoroConfig } from '@/constants/pomodoroConfig';

type PomodoroConfig = typeof defaultPomodoroConfig;
type PomodoroMode = 'focus' | 'shortBreak' | 'longBreak';
type PomodoroVariant = keyof PomodoroConfig;

export type { PomodoroConfig, PomodoroMode, PomodoroVariant };
