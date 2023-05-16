import { Navigate } from 'react-router-dom';

import { useAuthContext } from './AuthProvider';
import { AUTH_STATE } from './types';

const AdminAuthGuard = ({ children }: { children: JSX.Element }) => {
  const { authState, user } = useAuthContext();
  if (authState === AUTH_STATE.NOT_LOGGED_IN || !user) {
    return <Navigate to='/login' replace />;
  }
  return children;
};

export default AdminAuthGuard;
