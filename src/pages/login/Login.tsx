import { useEffect } from 'react';

import { Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/card';
import { useAuthContext } from '@/providers/auth/AuthProvider';

import LoginForm from './components/login-form/LoginForm';

const Login = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuthContext();
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);
  return (
    <div className='mx-auto w-full max-w-md space-y-4 px-4 sm:px-0 md:w-1/3 xl:w-1/4'>
      <Card className='border'>
        <CardHeader className='space-y-0'>
          <div
            className='flex w-fit cursor-pointer select-none items-center gap-1 text-center duration-100'
            onClick={() => navigate('/')}
          >
            <CardTitle className='text-2xl font-normal text-primary dark:text-primary'>
              Pomoration
            </CardTitle>
            <Clock className='h-8 w-8 text-primary dark:text-primary' />
          </div>
          <CardDescription className='mt-0 text-gray-400 dark:text-gray-400'>
            Please login to continue
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-8'>
          <LoginForm />
          <div className='text-center text-sm'>
            <p className='text-muted-foreground'>
              Don&apos;t have an account?
              <a
                href='/signup'
                className='ml-1 cursor-pointer text-primary duration-200 hover:underline'
              >{`Sign up`}</a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
