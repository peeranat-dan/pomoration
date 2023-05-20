import { ClockIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/card';

const Verify = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const state = location.state;
  const email = state?.email;
  // If the user is not coming from the signup page, redirect them to the home page
  if (!email) {
    return <Navigate to='/' replace />;
  }
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
            {email}
          </CardDescription>
        </CardHeader>
        <CardContent className='mb-3 space-y-4 text-center'>
          <div className='space-y-2'>
            <EnvelopeIcon className='mx-auto h-16 w-16 text-primary-700 dark:text-primary-200' />
            <h4 className='text-black dark:text-gray-100'>Thank you for signing up!</h4>
            <p className='leading-tight text-gray-500 dark:text-gray-400'>
              A verification email has been sent to your email address. Please check your inbox.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Verify;
