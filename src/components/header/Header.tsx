import { useNavigate } from 'react-router-dom';

import ThemeToggle from '@/containers/theme-toggle';
import UserAvatarMenu from '@/containers/user-avatar-menu';
import { useAuthContext } from '@/providers/auth/AuthProvider';

import Avatar from '../avatar';
import { Button } from '../base';

const Header = () => {
  const navigate = useNavigate();
  const { isLoggedIn, logout, user } = useAuthContext();
  return (
    <header className='header mx-auto flex max-w-xl items-center justify-between px-4 py-6 sm:px-0'>
      <h2 className='select-none font-semibold tracking-tight'>Pomoration</h2>
      <div className='flex items-center gap-2'>
        <ThemeToggle />
        {isLoggedIn ? (
          <UserAvatarMenu logout={logout}>
            <Avatar.Text size='sm'>{user?.displayName.substring(0, 1) ?? ''}</Avatar.Text>
          </UserAvatarMenu>
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
