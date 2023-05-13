import { useNavigate } from 'react-router-dom';

import ThemeToggle from '@/containers/theme-toggle';

import { Button } from '../base';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className='header mx-auto flex max-w-xl items-center justify-between px-4 py-6 sm:px-0'>
      <h2 className='select-none'>Pomoration</h2>
      <div className='flex items-center gap-2'>
        <ThemeToggle />
        <Button variant='secondary' onClick={() => navigate('/login')}>
          Login
        </Button>
      </div>
    </header>
  );
};

export default Header;
