import { Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import SettingButton from '@/containers/setting-button';
// import ThemeToggle from '@/containers/theme-toggle';
import UserAvatarMenu from '@/containers/user-avatar-menu';
import { useAuthContext } from '@/providers/auth/AuthProvider';

import { Button } from '../base';

const Header = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuthContext();
  return (
    <header className='header nav mx-auto flex max-w-xl items-center justify-between px-4 py-6 sm:px-0'>
      <div
        className='flex cursor-pointer select-none items-center gap-1 text-2xl font-semibold tracking-tight text-primary-700 dark:text-primary-100'
        onClick={() => navigate('/')}
      >
        Pomoration
        <Clock className='h-6 w-6 stroke-2' />
      </div>
      <div className='flex items-center gap-2'>
        <SettingButton />
        {isLoggedIn ? (
          <UserAvatarMenu />
        ) : (
          <Button variant='secondary' onClick={() => navigate('/login')}>
            Login
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
