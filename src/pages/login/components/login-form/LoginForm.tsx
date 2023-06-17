import { zodResolver } from '@hookform/resolvers/zod';
import { AlertCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/base';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/form';
import Input from '@/components/form/input';
import { useAuthContext } from '@/providers/auth/AuthProvider';
import type { LoginFormType } from '@/types/auth';
import { LoginFormSchema } from '@/types/auth';

const LoginForm = () => {
  const form = useForm<LoginFormType>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const { login, authError, loading } = useAuthContext();

  const onSubmit = async (data: LoginFormType) => {
    await login(data);
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
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type='email'
                    id='email'
                    placeholder='Enter your email'
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
                    placeholder='Enter your password'
                    autoComplete='current-password'
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button disabled={loading} type='submit' className='w-full'>
            Login
          </Button>
        </form>
      </Form>
    </>
  );
};

export default LoginForm;
