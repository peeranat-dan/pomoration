import { Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import SettingButton from '@/containers/setting-button';
import UserAvatarMenu from '@/containers/user-avatar-menu';
import { useAuthContext } from '@/providers/auth/AuthProvider';

import { Button } from '../base';

const Header = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuthContext();
  return (
    <header className='header nav mx-auto flex max-w-xl items-center justify-between px-4 py-6 sm:px-0'>
      <div
        className='flex cursor-pointer select-none items-center gap-1 text-2xl font-semibold tracking-tight text-primary dark:text-primary'
        onClick={() => navigate('/')}
      >
        Pomoration
        <Clock className='h-6 w-6 stroke-2' />
      </div>
      <div className='flex items-center gap-2'>
        {/* NOTE: In the future we'll redirect user to setting route */}
        {isLoggedIn ? null : <SettingButton />}
        {isLoggedIn ? (
          <UserAvatarMenu />
        ) : (
          <Button onClick={() => navigate('/login')}>Login</Button>
        )}
      </div>
    </header>
  );
};

export default Header;
