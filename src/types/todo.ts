import { z } from 'zod';

export const TodoFormSchema = z.object({
  title: z.string().min(1),
  description: z.string(),
});

export type TodoFormType = z.infer<typeof TodoFormSchema>;
