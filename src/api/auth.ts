import { supabaseClient } from '@/libs/supabase/initialize';
import type { LoginFormType, SignupFormType } from '@/types/auth';

export const signup = async (data: SignupFormType) => {
  const { email, password, displayName } = data;
  const { data: _data, error } = await supabaseClient.auth.signUp({
    email,
    password,
    options: {
      data: {
        displayName,
      },
    },
  });
  if (error) {
    throw error;
  }
  return { data: _data, error };
};

export const loginWithEmailAndPassword = async (data: LoginFormType) => {
  const { email, password } = data;
  const { data: _data, error } = await supabaseClient.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    throw error;
  }
  return { data: _data, error };
};

export const signOut = async () => {
  const { error } = await supabaseClient.auth.signOut();
  if (error) {
    throw error;
  }
};

export const auth = supabaseClient.auth;
