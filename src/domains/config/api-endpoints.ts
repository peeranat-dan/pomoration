import { supabaseClient } from '@/libs/supabase/initialize';
import type { PomodoroFormType } from '@/types/pomodoro';

export const findConfigByUserId = async (userId: string | undefined) => {
  const { data, error } = await supabaseClient
    .from('pomodoroConfig')
    .select('focus, shortBreak, longBreak')
    .eq('user_id', userId);

  if (error) {
    throw error;
  }

  return data?.[0] ?? { focus: 25, shortBreak: 5, longBreak: 15 };
};

export const upsertConfig = async (config: PomodoroFormType) => {
  const {
    data: { user },
  } = await supabaseClient.auth.getUser();

  if (!user) {
    throw new Error('User ID is required');
  }

  const { error } = await supabaseClient.from('pomodoroConfig').upsert(
    {
      ...config,
      user_id: user.id,
    },
    { onConflict: 'user_id' },
  );

  if (error) {
    throw error;
  }
};
