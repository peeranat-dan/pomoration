import { z } from 'zod';

const convertToInt = (value: string | number) => parseInt(value.toString(), 10);

const PomodoroFormSchema = z.object({
  focus: z.union([z.string().min(1), z.number()]).transform((value) => convertToInt(value)),
  shortBreak: z.union([z.string().min(1), z.number()]).transform((value) => convertToInt(value)),
  longBreak: z.union([z.string().min(1), z.number()]).transform((value) => convertToInt(value)),
});

type PomodoroMode = 'focus' | 'shortBreak' | 'longBreak';
type PomodoroFormType = z.infer<typeof PomodoroFormSchema>;

export { PomodoroFormSchema };
export type { PomodoroMode, PomodoroFormType };
