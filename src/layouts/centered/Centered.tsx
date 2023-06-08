import { Outlet } from 'react-router-dom';

const CenteredLayout = ({ children }: { children?: React.ReactNode }) => (
  <div className='flex min-h-screen w-screen flex-col items-center justify-center bg-background dark:bg-background'>
    {children ?? <Outlet />}
  </div>
);

export default CenteredLayout;
