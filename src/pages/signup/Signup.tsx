import { useEffect } from 'react';

import { ClockIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/card';
import { useAuthContext } from '@/providers/auth/AuthProvider';

import SignupForm from './components/signup-form';

const Signup = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuthContext();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  const handleVerifyRoute = (data: Record<string, string>) => {
    navigate('/verify', { state: { email: data.email } });
  };

  return (
    <div className='mx-auto w-full max-w-md space-y-4 px-4 sm:px-0 md:w-1/3 xl:w-1/4'>
      <Card className='border-none shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_0_16px_1px_#8662C7]'>
        <CardHeader className='space-y-0'>
          <div
            className='flex w-fit cursor-pointer select-none items-center gap-1 text-center duration-100'
            onClick={() => navigate('/')}
          >
            <CardTitle className='text-2xl font-normal text-primary-700 dark:text-white'>
              Pomoration
            </CardTitle>
            <ClockIcon className='h-8 w-8 text-primary-700 dark:text-primary-200' />
          </div>
          <CardDescription className='mt-0 text-gray-400 dark:text-gray-400'>
            Create a new account
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-8'>
          <SignupForm onSignup={handleVerifyRoute} />
          <div className='text-center'>
            <p>
              Already have an account?
              <a
                href='/login'
                className='ml-1 cursor-pointer text-primary duration-200 hover:underline dark:text-primary-200'
              >{`Login`}</a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;
