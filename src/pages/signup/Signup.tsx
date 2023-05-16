import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { Card, CardContent } from '@/components/card';
import FormCardHeader from '@/containers/form-card-header';
import CenteredLayout from '@/layouts/centered';
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
  return (
    <CenteredLayout>
      <div className='mx-auto w-full max-w-md space-y-4 px-4 sm:px-0 md:w-1/3 xl:w-1/4'>
        <Card className='space-y-4'>
          <FormCardHeader />
          <CardContent className='space-y-4'>
            <SignupForm />
            <div className='text-center'>
              <p>
                Already have an account?
                <a
                  href='/login'
                  className='ml-1 cursor-pointer text-primary duration-200 hover:underline'
                >{`Login`}</a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </CenteredLayout>
  );
};

export default Signup;
