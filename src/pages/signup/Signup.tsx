import { useEffect } from 'react';

import { Clock } from 'lucide-react';
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
      <Card className='border'>
        <CardHeader className='space-y-0'>
          <div
            className='flex w-fit cursor-pointer select-none items-center gap-1 text-center duration-100'
            onClick={() => navigate('/')}
          >
            <CardTitle className='text-2xl font-normal'>Pomoration</CardTitle>
            <Clock className='h-8 w-8' />
          </div>
          <CardDescription className='mt-0 text-gray-400 dark:text-gray-400'>
            Create a new account
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-8'>
          <SignupForm onSignup={handleVerifyRoute} />
          <div className='text-center text-sm'>
            <p className='text-muted-foreground'>
              Already have an account?
              <a
                href='/login'
                className='ml-1 text-primary duration-200 hover:underline'
              >{`Login`}</a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;
