import type { AuthResponse, User } from '@supabase/supabase-js';

import type { LoginFormType, SignupFormType } from '@/types/auth';

export enum AUTH_STATE {
  LOGGED_IN = 'LOGGED_IN',
  NOT_LOGGED_IN = 'NOT_LOGGED_IN',
  LOGGING_IN = 'LOGGING_IN',
  INITIALIZING = 'INITIALIZING',
}

export type AuthContextProps = {
  authState: AUTH_STATE;
  loading: boolean;
  login: (data: LoginFormType) => Promise<void>;
  logout: () => Promise<void>;
  signUp: (data: SignupFormType) => Promise<AuthResponse | undefined>;
  authError: string | null;
  isLoggedIn: boolean;
  user: UserData | null;
};

export type UserData = {
  email: string;
  id: string;
  displayName: string;
};

export type { User };
