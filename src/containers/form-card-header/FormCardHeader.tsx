import { ClockIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

import { CardDescription, CardHeader, CardTitle } from '@/components/card';

const FormCardHeader = () => {
  const navigate = useNavigate();
  return (
    <CardHeader className='space-y-0'>
      <div
        className='flex w-fit cursor-pointer select-none items-center gap-1 text-center duration-100'
        onClick={() => navigate('/')}
      >
        <CardTitle className='text-2xl font-normal text-primary-700 dark:text-white'>
          Pomoration
        </CardTitle>
        <ClockIcon className='h-10 w-10 text-primary-700 dark:text-primary-200' />
      </div>
      <CardDescription className='mt-0 text-gray-400 dark:text-gray-500'>
        Please login to continue
      </CardDescription>
    </CardHeader>
  );
};

export default FormCardHeader;
