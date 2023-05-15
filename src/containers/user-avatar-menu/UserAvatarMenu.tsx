import { Fragment } from 'react';

import { Menu, Transition } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';

import { useAuthContext } from '@/providers/auth/AuthProvider';
import { cn } from '@/utils/classnames';

const MenuItem = ({
  onClick,
  children,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}) => {
  return (
    <div className='px-1 py-1'>
      <Menu.Item>
        {({ active }) => (
          <button
            className={cn([
              active ? 'bg-primary-100 text-primary-600 dark:bg-primary-300' : 'text-gray-900',
              'group flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm font-medium',
            ])}
            onClick={onClick}
          >
            {children}
          </button>
        )}
      </Menu.Item>
    </div>
  );
};

const UserAvatarMenu = ({
  children,
  logout,
}: {
  children: React.ReactNode;
  logout: () => Promise<void>;
}) => {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  if (!user) {
    return null;
  }

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <div className='relative'>
      <Menu as='div'>
        <Menu.Button>{children}</Menu.Button>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:divide-gray-500 dark:bg-bg-dark'>
            <div className='select-none p-2'>
              <h5 className='line-clamp-1 text-2xl'>{user.displayName}</h5>
              <div className='line-clamp-1 text-sm text-gray-500 dark:text-gray-400'>
                {user.email}
              </div>
            </div>
            <MenuItem onClick={handleLogout}>
              <p>Logout</p>
            </MenuItem>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default UserAvatarMenu;
