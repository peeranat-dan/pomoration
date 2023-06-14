import { supabaseClient } from '@/libs/supabase/initialize';
import type { TodoFormType } from '@/types/todo';

export const findTodosByUserId = async (userId: string | undefined) => {
  if (!userId) {
    throw new Error('User ID is required');
  }

  const { data, error } = await supabaseClient
    .from('todos')
    .select('*')
    .eq('user_id', userId)
    .filter('finishedAt', 'is', null)
    .order('createdAt', { ascending: false });

  if (error) {
    throw error;
  }

  return data;
};

export const createTodo = async (todo: TodoFormType) => {
  const { title, description } = todo;
  const userId = (await supabaseClient.auth.getUser()).data?.user?.id;
  if (!userId) {
    throw new Error('User ID is required');
  }
  const { data, error } = await supabaseClient
    .from('todos')
    .insert([{ title, description, user_id: userId }]);

  if (error) {
    throw error;
  }

  return data;
};

export const finishedTodo = async (id: number) => {
  const { error } = await supabaseClient
    .from('todos')
    .update({ finishedAt: new Date().toISOString() })
    .eq('id', id);

  if (error) {
    throw error;
  }

  const { data: todoData } = await supabaseClient.from('todos').select('*').eq('id', id);

  return todoData;
};
