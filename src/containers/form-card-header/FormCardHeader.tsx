import { ClockIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

import { CardHeader, CardTitle } from '@/components/card';

const FormCardHeader = () => {
  const navigate = useNavigate();
  return (
    <CardHeader className='bg-primary-100'>
      <div
        className='mx-auto flex w-fit cursor-pointer select-none items-center justify-center gap-1 text-center duration-100'
        onClick={() => navigate('/')}
      >
        <CardTitle className='text-3xl font-medium text-primary-700 dark:text-primary-700'>
          Pomoration
        </CardTitle>
        <ClockIcon className='h-10 w-10 text-primary-700' />
      </div>
    </CardHeader>
  );
};

export default FormCardHeader;
