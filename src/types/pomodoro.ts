import { z } from 'zod';

import type { Database } from '@/libs/supabase/database.types';

const convertToInt = (value: string | number) => parseInt(value.toString(), 10);

const PomodoroFormSchema = z.object({
  focus: z.union([z.string().min(1), z.number()]).transform((value) => convertToInt(value)),
  shortBreak: z.union([z.string().min(1), z.number()]).transform((value) => convertToInt(value)),
  longBreak: z.union([z.string().min(1), z.number()]).transform((value) => convertToInt(value)),
});

type PomodoroMode = 'focus' | 'shortBreak' | 'longBreak';
type PomodoroFormType = z.infer<typeof PomodoroFormSchema>;
type PomodoroConfig = Database['public']['Tables']['pomodoroConfig']['Row'];

export { PomodoroFormSchema };
export type { PomodoroConfig, PomodoroMode, PomodoroFormType };
