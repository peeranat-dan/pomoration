import { z } from 'zod';

const envSchema = z.object({
  supabase: z.object({
    url: z.string().default(''),
    anonKey: z.string().default(''),
  }),
});

export type Env = z.infer<typeof envSchema>;

export const env = envSchema.parse({
  supabase: {
    url: import.meta.env.VITE_SUPABASE_URL,
    anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
  },
});
