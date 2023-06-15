import { useQuery } from '@tanstack/react-query';

import PomodoroTimer from '@/containers/pomodoro-timer';
import { findConfigByUserId } from '@/domains/config/api-endpoints';
import { useAuthContext } from '@/providers/auth/AuthProvider';

const PomodoroTimerContainer = () => {
  const { user } = useAuthContext();
  const {
    data: configData,
    isLoading: isConfigLoading,
    isError: isConfigError,
  } = useQuery({
    queryKey: ['pomodoro-settings', user?.id],
    queryFn: () => {
      return findConfigByUserId(user?.id);
    },
    refetchOnWindowFocus: false,
    enabled: !!user,
  });

  if (!user) {
    return <PomodoroTimer config={{ focus: 25, shortBreak: 5, longBreak: 15 }} />;
  } else if (isConfigLoading) {
    return (
      <div className='mx-auto flex w-full flex-col items-center justify-center gap-4 py-4 md:w-[312px] md:gap-2'>
        <div className='h-[60px] w-full rounded-lg bg-primary/5 md:h-[96px]' />
        <div className='h-[20px] w-[50px] rounded-md bg-primary/5 md:h-[32px]' />
        <div className='h-[40px] w-full rounded-md bg-primary/5 md:h-[32px]' />
      </div>
    );
  } else if (isConfigError) {
    return <div>error</div>;
  } else {
    return <PomodoroTimer config={configData} />;
  }
};

export default PomodoroTimerContainer;
