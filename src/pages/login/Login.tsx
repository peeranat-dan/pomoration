import { useNavigate } from 'react-router-dom';

import CenteredLayout from '@/layouts/centered';

import LoginForm from './components/login-form/LoginForm';

const Login = () => {
  const navigate = useNavigate();
  return (
    <CenteredLayout>
      <div className='mx-auto w-1/3 max-w-md space-y-4 px-4 sm:px-0'>
        <div
          className='cursor-default select-none text-center text-3xl font-bold  text-primary-500'
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
