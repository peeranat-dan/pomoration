import type { User } from '@supabase/supabase-js';

export enum AUTH_STATE {
  LOGGED_IN = 'LOGGED_IN',
  NOT_LOGGED_IN = 'NOT_LOGGED_IN',
  LOGGING_IN = 'LOGGING_IN',
  INITIALIZING = 'INITIALIZING',
}

export type AuthContextProps = {
  authState: AUTH_STATE;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  authError: string | null;
  isLoggedIn: boolean;
  user: UserData | null;
};

export type UserData = {
  email: string;
  id: string;
};

export type { User };
