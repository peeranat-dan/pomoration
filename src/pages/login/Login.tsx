import { useNavigate } from 'react-router-dom';

import CenteredLayout from '@/layouts/centered';

import LoginForm from './components/login-form/LoginForm';

const Login = () => {
  const navigate = useNavigate();
  return (
    <CenteredLayout>
      <div className='mx-auto w-full max-w-md space-y-4 px-4 sm:px-0 md:w-1/3'>
        <div
          className='cursor-pointer select-none text-center text-4xl font-bold text-primary-500'
          onClick={() => navigate('/')}
        >
          POMORATION
        </div>
        <LoginForm />
      </div>
    </CenteredLayout>
  );
};

export default Login;
