import { Outlet } from 'react-router-dom';

import Header from '@/components/header';

const BaseLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className='min-h-screen w-screen bg-background dark:bg-background'>
      <Header />
      {children ?? <Outlet />}
    </div>
  );
};

export default BaseLayout;
