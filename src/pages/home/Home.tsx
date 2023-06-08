import PomodoroTimer from '@/containers/pomodoro-timer';

const Home = () => {
  return (
    <div className='mx-auto max-w-xl px-4 sm:px-0'>
      <PomodoroTimer />
      <div className='fixed bottom-0 left-0 mb-2 ml-2'></div>
    </div>
  );
};

export default Home;
