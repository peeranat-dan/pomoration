import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/base';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className='space-y-6 text-center'>
      <div>
        <h1 className='text-8xl'>404</h1>
        <h3>This page does not exist</h3>
      </div>
      <Button onClick={() => navigate('/')}>Back to home</Button>
    </div>
  );
};

export default NotFound;
