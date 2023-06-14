import { zodResolver } from '@hookform/resolvers/zod';
import { AlertCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/base';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/form';
import Input from '@/components/form/input';
import { useAuthContext } from '@/providers/auth/AuthProvider';
import type { SignupFormType } from '@/types/auth';
import { SignupFormSchema } from '@/types/auth';

type SignupFormProps = {
  onSignup: (data: Record<string, string>) => void;
};

const SignupForm = ({ onSignup }: SignupFormProps) => {
  const form = useForm<SignupFormType>({
    resolver: zodResolver(SignupFormSchema),
    defaultValues: {
      email: '',
      password: '',
      displayName: '',
    },
  });
  const { signUp, authError, loading } = useAuthContext();

  const onSubmit = (data: SignupFormType) => {
    signUp(data).then(() => onSignup({ email: data.email }));
  };

  return (
    <>
      {authError ? (
        <div className='mb-4 flex items-center gap-2 rounded-md bg-red-50 p-4 text-red-800'>
          <AlertCircle className='h-6 w-6 shrink-0 text-red-800' aria-hidden='true' />
          <span>{authError}</span>
        </div>
      ) : null}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
          <FormField
            control={form.control}
            name='displayName'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Display name</FormLabel>
                <FormControl>
                  <Input
                    type='text'
                    id='displayName'
                    placeholder='What should we call you?'
                    autoComplete='email'
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type='email'
                    id='email'
                    placeholder='Email'
                    autoComplete='email'
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type='password'
                    id='password'
                    placeholder='Password'
                    autoComplete='current-password'
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='confirmPassword'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    type='password'
                    id='password'
                    placeholder='Password'
                    autoComplete='new-password'
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button disabled={loading} type='submit' className='w-full'>
            Sign up
          </Button>
        </form>
      </Form>
    </>
  );
};

export default SignupForm;
