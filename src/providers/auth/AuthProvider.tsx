import { createContext, useState, useEffect, useContext } from 'react';

import { isAuthError } from '@supabase/supabase-js';

import { auth, loginWithEmailAndPassword } from '@/api/auth';

import { AUTH_ERROR_MESSAGES } from './constants';

type AuthContextProps = {
  authState: AUTH_STATE;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  authError: string | null;
};

enum AUTH_STATE {
  LOGGED_IN = 'LOGGED_IN',
  NOT_LOGGED_IN = 'NOT_LOGGED_IN',
  LOGGING_IN = 'LOGGING_IN',
  INITIALIZING = 'INITIALIZING',
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authState, setAuthState] = useState<AUTH_STATE>(AUTH_STATE.INITIALIZING);
  const [loading, setLoading] = useState<boolean>(true);
  const [authError, setAuthError] = useState<string | null>(null);

  useEffect(() => {
    const { data } = auth.onAuthStateChange((_, session) => {
      if (!session) {
        setAuthState(AUTH_STATE.NOT_LOGGED_IN);
        setLoading(false);
      } else {
        setAuthState(AUTH_STATE.LOGGED_IN);
        setLoading(false);
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

  return (
    <AuthContext.Provider
      value={{
        authError,
        authState,
        loading,
        login,
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
