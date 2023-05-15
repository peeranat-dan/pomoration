import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/base';
import Form from '@/components/form';
import { useAuthContext } from '@/providers/auth/AuthProvider';
import type { LoginFormType } from '@/types/auth';
import { LoginFormSchema } from '@/types/auth';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>({
    resolver: zodResolver(LoginFormSchema),
  });
  const { login, authError, loading } = useAuthContext();

  const onSubmit = async (data: LoginFormType) => {
    await login(data);
  };

  return (
    <>
      {authError ? (
        <div className='mb-4 flex items-center gap-2 rounded-md bg-red-50 p-4 text-red-800'>
          <ExclamationCircleIcon className='h-6 w-6 shrink-0 text-red-800' aria-hidden='true' />
          <span>{authError}</span>
        </div>
      ) : null}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-4'>
          <Form.Input
            type='email'
            id='email'
            placeholder='Email'
            label='Email'
            {...register('email')}
            error={errors.email?.message}
          />
          <Form.Input
            label='Password'
            type='password'
            id='password'
            placeholder='Password'
            {...register('password')}
            error={errors.password?.message}
          />
          <Button disabled={loading} type='submit'>
            Login
          </Button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
