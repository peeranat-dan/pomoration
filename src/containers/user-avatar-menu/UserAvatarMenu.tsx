import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
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

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild className='flex cursor-pointer items-center gap-2'>
        <Avatar.Text size='md'>{user.displayName.substring(0, 1)}</Avatar.Text>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className='mt-2 rounded-md border bg-white p-1 dark:border-gray-500 dark:bg-bg-dark'
          sideOffset={5}
        >
          <DropdownMenu.Item className='group px-4 py-2'>
            <h4>{user.displayName}</h4>
            <p className='text-sm text-gray-500 dark:text-gray-400'>{user.email}</p>
          </DropdownMenu.Item>
          <DropdownMenu.Separator className='m-[5px] h-[1px] bg-primary/30' />
          <DropdownMenu.Item
            onClick={handleLogout}
            className='group flex cursor-pointer gap-2 rounded-md px-4 py-2 text-gray-700 duration-150 hover:bg-red-500 hover:text-white dark:text-white'
          >
            <ArrowLeftOnRectangleIcon className='h-5 w-5' />
            <span className='text-sm'>Logout</span>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default UserAvatarMenu;
