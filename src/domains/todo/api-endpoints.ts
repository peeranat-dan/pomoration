import { supabaseClient } from '@/libs/supabase/initialize';
import type { TodoFormType } from '@/types/todo';

export const findActiveTodosByUserId = async (userId: string | undefined) => {
  if (!userId) {
    throw new Error('User ID is required');
  }

  const { data, error } = await supabaseClient
    .from('todos')
    .select('*')
    .eq('user_id', userId)
    .filter('finishedAt', 'is', null)
    .filter('deletedAt', 'is', null)
    .order('createdAt', { ascending: false });

  if (error) {
    throw error;
  }

  return data;
};

export const findAllTodosByUserId = async (
  userId: string | undefined,
  //   page: number,
  //   pageSize = 10,
) => {
  if (!userId) {
    throw new Error('User ID is required');
  }

  //   const [startRange, endRange] = [(page - 1) * pageSize, page * pageSize];

  const { data, error } = await supabaseClient
    .from('todos')
    .select('*')
    .eq('user_id', userId)
    // .range(startRange, endRange)
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

export const deleteTodo = async (id: number) => {
  const { error } = await supabaseClient
    .from('todos')
    .update({ deletedAt: new Date().toISOString() })
    .eq('id', id);

  if (error) {
    throw error;
  }

  return true;
};
