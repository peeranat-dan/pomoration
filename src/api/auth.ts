import { supabaseClient } from '@/libs/supabase';
import type { SignupFormType } from '@/types/auth';

export const signup = async (_data: SignupFormType) => {
  const { data, error } = await supabaseClient.auth.signUp({
    email: _data.email,
    password: _data.password,
    options: {
      data: {
        displayName: _data.displayName,
      },
    },
  });
  if (error) {
    throw error;
  }
  return { data, error };
};

export const loginWithEmailAndPassword = async (email: string, password: string) => {
  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    throw error;
  }
  return { data, error };
};

export const signOut = async () => {
  const { error } = await supabaseClient.auth.signOut();
  if (error) {
    throw error;
  }
};

export const auth = supabaseClient.auth;
