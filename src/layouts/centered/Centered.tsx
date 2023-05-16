import { Outlet } from 'react-router-dom';

const CenteredLayout = ({ children }: { children?: React.ReactNode }) => (
  <div className='flex min-h-screen w-screen flex-col items-center justify-center bg-bg-light dark:bg-bg-dark'>
    {children ?? <Outlet />}
  </div>
);

export default CenteredLayout;
