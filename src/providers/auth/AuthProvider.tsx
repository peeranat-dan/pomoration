import { createContext, useState, useEffect, useContext } from 'react';

import { isAuthError } from '@supabase/supabase-js';

import { auth, loginWithEmailAndPassword } from '@/api/auth';
import LoadingSpinner from '@/components/loading-spinner';

import { AUTH_ERROR_MESSAGES } from './constants';
import type { AuthContextProps, UserData } from './types';
import { AUTH_STATE } from './types';

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authState, setAuthState] = useState<AUTH_STATE>(AUTH_STATE.INITIALIZING);
  const [loading, setLoading] = useState<boolean>(true);
  const [authError, setAuthError] = useState<string | null>(null);
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    const { data } = auth.onAuthStateChange((_, session) => {
      if (!session) {
        setAuthState(AUTH_STATE.NOT_LOGGED_IN);
        setUser(null);
        setLoading(false);
      } else {
        if (session.user.email) {
          setAuthState(AUTH_STATE.LOGGED_IN);
          setUser({
            id: session.user.id,
            email: session.user.email,
          });
          setLoading(false);
        } else {
          setAuthState(AUTH_STATE.NOT_LOGGED_IN);
          setUser(null);
          setLoading(false);
        }
      }
    });

    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  const login = async (email: string, password: string) => {
    setAuthState(AUTH_STATE.LOGGING_IN);
    setAuthError(null);
    setLoading(true);
    try {
      await loginWithEmailAndPassword(email, password);
    } catch (error) {
      if (isAuthError(error)) {
        setAuthError(AUTH_ERROR_MESSAGES[error.message]);
      } else {
        setAuthError(AUTH_ERROR_MESSAGES.Unknown);
      }
    }
  };

  const logout = async () => {
    try {
      const { error } = await auth.signOut();
      setAuthState(AUTH_STATE.NOT_LOGGED_IN);
      if (error) {
        throw error;
      }
    } catch (error) {
      if (isAuthError(error)) {
        setAuthError(AUTH_ERROR_MESSAGES[error.message]);
      } else {
        setAuthError(AUTH_ERROR_MESSAGES.Unknown);
      }
    }
  };

  if (authState === AUTH_STATE.INITIALIZING) {
    return (
      <div className='grid h-screen w-screen place-items-center bg-bg-light text-2xl dark:bg-bg-dark'>
        <LoadingSpinner className='h-10 w-10' />
      </div>
    );
  }

  const isLoggedIn = authState === AUTH_STATE.LOGGED_IN;

  return (
    <AuthContext.Provider
      value={{
        authError,
        authState,
        loading,
        login,
        logout,
        isLoggedIn,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within AuthProvider');
  }
  return context;
};

export default AuthProvider;
export { useAuthContext, AuthContext };
