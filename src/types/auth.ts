import { z } from 'zod';

export const LoginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: 'Password must be at least 8 characters long.' }),
});

export const SignupFormSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8, { message: 'Password must be at least 8 characters long.' }),
    confirmPassword: z.string(),
    displayName: z.string().min(3, { message: 'Display name must be at least 3 characters long.' }),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: 'Passwords do not match.',
    path: ['confirmPassword'],
  });

export const ProfileFormSchema = z.object({
  displayName: z.string().min(3, { message: 'Display name must be at least 3 characters long.' }),
});

export type LoginFormType = z.infer<typeof LoginFormSchema>;
export type SignupFormType = z.infer<typeof SignupFormSchema>;
export type ProfileFormType = z.infer<typeof ProfileFormSchema>;
