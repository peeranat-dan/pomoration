import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/base';
import Form from '@/components/form';
import { useAuthContext } from '@/providers/auth/AuthProvider';
import type { SignupFormType } from '@/types/auth';
import { SignupFormSchema } from '@/types/auth';

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormType>({
    resolver: zodResolver(SignupFormSchema),
  });
  const { signUp, authError, loading } = useAuthContext();

  const onSubmit = async (data: SignupFormType) => {
    await signUp(data);
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
            type='text'
            id='displayName'
            placeholder='What should we call you?'
            label='Display Name'
            autoComplete='name'
            {...register('displayName')}
            error={errors.displayName?.message}
          />
          <Form.Input
            type='email'
            id='email'
            placeholder='Please input your email'
            label='Email'
            autoComplete='email'
            {...register('email')}
            error={errors.email?.message}
          />
          <Form.Input
            label='Password'
            type='password'
            id='password'
            placeholder='Please input 8 or more characters'
            autoComplete='new-password'
            {...register('password')}
            error={errors.password?.message}
          />
          <Form.Input
            label='Confirm Password'
            type='password'
            id='confirmPassword'
            placeholder='Please confirm your password'
            autoComplete='new-password'
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message}
          />
          <Button disabled={loading} type='submit' className='mt-4'>
            Sign up
          </Button>
        </div>
      </form>
    </>
  );
};

export default SignupForm;
