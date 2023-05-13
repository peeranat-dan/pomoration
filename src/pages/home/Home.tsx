import PomodoroTimer from '@/containers/pomodoro-timer';
import BaseLayout from '@/layouts/base';

const Home = () => {
  return (
    <BaseLayout>
      <div className='mx-auto max-w-xl px-4 sm:px-0'>
        <PomodoroTimer />
      </div>
    </BaseLayout>
  );
};

export default Home;
