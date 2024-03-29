import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ListChecks, LogOut, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import Avatar from '@/components/avatar/Avatar';
import { useAuthContext } from '@/providers/auth/AuthProvider';

const UserAvatarMenu = () => {
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();

  if (!user) {
    return null;
  }

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  const handleTodo = () => {
    navigate('/todo');
  };

  const handleSettings = () => {
    navigate('/settings');
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild className='flex cursor-pointer items-center gap-2'>
        <Avatar.Text size='md' className='text-muted'>
          {user.displayName.substring(0, 1).toUpperCase()}
        </Avatar.Text>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className='mr-2 mt-2 select-none rounded-md border bg-popover p-1 text-popover-foreground dark:border-gray-500  md:mr-0'
          sideOffset={5}
        >
          <div className='group px-4 py-2'>
            <h4 className='font-semibold'>{user.displayName}</h4>
            <p className='text-sm text-gray-500 dark:text-gray-400'>{user.email}</p>
          </div>
          <DropdownMenu.Separator className='m-[5px] h-[1px] bg-primary/30' />
          <DropdownMenu.Item
            onClick={handleSettings}
            className='group relative flex cursor-pointer gap-2 rounded-md px-4 py-2 outline-none duration-150 hover:bg-primary/10'
          >
            <Settings className='h-5 w-5' />
            <span className='text-sm'>Settings</span>
          </DropdownMenu.Item>
          <DropdownMenu.Item
            onClick={handleTodo}
            className='group relative flex cursor-pointer gap-2 rounded-md px-4 py-2 outline-none duration-150 hover:bg-primary/10'
          >
            <ListChecks className='h-5 w-5' />
            <span className='text-sm'>All Todos</span>
          </DropdownMenu.Item>
          <DropdownMenu.Item
            onClick={handleLogout}
            className='group relative flex cursor-pointer gap-2 rounded-md px-4 py-2 outline-none duration-150 hover:bg-red-500 hover:text-white dark:hover:bg-red-700'
          >
            <LogOut className='h-5 w-5' />
            <span className='text-sm'>Logout</span>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default UserAvatarMenu;
