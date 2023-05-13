import { supabaseClient } from '@/libs/supabase';

export const signup = async (email: string, password: string) => {
  const { data, error } = await supabaseClient.auth.signUp({
    email,
    password,
  });
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

export const auth = supabaseClient.auth;
