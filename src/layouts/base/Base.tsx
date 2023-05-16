import { Outlet } from 'react-router-dom';

import Header from '@/components/header';

const BaseLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className='min-h-screen w-screen bg-bg-light dark:bg-bg-dark'>
      <Header />
      {children ?? <Outlet />}
    </div>
  );
};

export default BaseLayout;
