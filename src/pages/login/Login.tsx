import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/card';
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
      <div className='mx-auto w-full max-w-md space-y-4 px-4 sm:px-0 md:w-1/3 lg:w-1/4 xl:w-1/4'>
        <Card>
          <CardHeader>
            <CardTitle
              className='cursor-pointer text-center text-3xl text-primary'
              onClick={() => navigate('/')}
            >
              POMORATION
            </CardTitle>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>
      </div>
    </CenteredLayout>
  );
};

export default Login;
