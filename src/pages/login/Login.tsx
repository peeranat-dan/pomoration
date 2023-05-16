import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { Card, CardContent } from '@/components/card';
import FormCardHeader from '@/containers/form-card-header';
import CenteredLayout from '@/layouts/centered';
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
    <CenteredLayout>
      <div className='mx-auto w-full max-w-md space-y-4 px-4 sm:px-0 md:w-1/3 xl:w-1/4'>
        <Card className='space-y-4'>
          <FormCardHeader />
          <CardContent className='space-y-4'>
            <LoginForm />
            <div className='text-center'>
              <p>
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
    </CenteredLayout>
  );
};

export default Login;
