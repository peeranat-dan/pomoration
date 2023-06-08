import { zodResolver } from '@hookform/resolvers/zod';
import { AlertCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/base';
import Form from '@/components/form';
import { useAuthContext } from '@/providers/auth/AuthProvider';
import type { SignupFormType } from '@/types/auth';
import { SignupFormSchema } from '@/types/auth';

type SignupFormProps = {
  onSignup: (data: Record<string, string>) => void;
};

const SignupForm = ({ onSignup }: SignupFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormType>({
    resolver: zodResolver(SignupFormSchema),
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-4'>
          <div className='space-y-2'>
            <Form.Label htmlFor='displayName'>Display Name</Form.Label>
            <Form.Input
              type='text'
              id='displayName'
              placeholder='What should we call you?'
              autoComplete='name'
              {...register('displayName')}
              error={errors.displayName?.message}
            />
          </div>
          <div className='space-y-2'>
            <Form.Label htmlFor='email'>Email</Form.Label>
            <Form.Input
              type='email'
              id='email'
              placeholder='Please input your email'
              autoComplete='email'
              {...register('email')}
              error={errors.email?.message}
            />
          </div>
          <div className='space-y-2'>
            <Form.Label htmlFor='password'>Password</Form.Label>
            <Form.Input
              type='password'
              id='password'
              placeholder='Please input 8 or more characters'
              autoComplete='new-password'
              {...register('password')}
              error={errors.password?.message}
            />
          </div>
          <div className='space-y-2'>
            <Form.Label htmlFor='confirmPassword'>Confirm Password</Form.Label>
            <Form.Input
              type='password'
              id='confirmPassword'
              placeholder='Please confirm your password'
              autoComplete='new-password'
              {...register('confirmPassword')}
              error={errors.confirmPassword?.message}
            />
          </div>
          <Button disabled={loading} type='submit' className='mt-4'>
            Sign up
          </Button>
        </div>
      </form>
    </>
  );
};

export default SignupForm;
