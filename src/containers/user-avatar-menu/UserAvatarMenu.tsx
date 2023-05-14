import { Fragment } from 'react';

import { Menu, Transition } from '@headlessui/react';

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
              active ? 'bg-primary-100 text-primary-600' : 'text-gray-900',
              'group flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm',
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
          <Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
            <div className='select-none p-2'>
              <h5>Guest</h5>
              <div className='text-sm text-gray-400'>ppeeranat.d@gmail.com</div>
            </div>
            <MenuItem onClick={logout}>Logout</MenuItem>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default UserAvatarMenu;
