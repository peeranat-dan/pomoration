import { supabaseClient } from '@/libs/supabase/initialize';
import type { ProfileFormType } from '@/types/auth';

export const updateUser = async (_data: ProfileFormType) => {
  const { data, error } = await supabaseClient.auth.updateUser({
    data: { displayName: _data.displayName },
  });

  if (error) {
    throw error;
  }

  return data;
};
