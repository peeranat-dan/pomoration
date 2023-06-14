import { supabaseClient } from '@/libs/supabase/initialize';

export const findTodosByUserId = async (userId: string | undefined) => {
  if (!userId) {
    throw new Error('User ID is required');
  }

  const { data, error } = await supabaseClient
    .from('todos')
    .select('*')
    .eq('user_id', userId)
    .filter('finishedAt', 'is', null);

  if (error) {
    throw error;
  }

  return data;
};
