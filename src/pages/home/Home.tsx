import { useQuery } from '@tanstack/react-query';

import { Button } from '@/components/base';
import PomodoroTimer from '@/containers/pomodoro-timer';
import { findTodosByUserId } from '@/domains/todo/api-endpoints';
import { useAuthContext } from '@/providers/auth/AuthProvider';

import { columns } from './columns';
import TodoTable from './TodoTable';

const Home = () => {
  const { user } = useAuthContext();
  const { data } = useQuery({
    queryKey: ['todos', user?.id],
    queryFn: () => {
      return findTodosByUserId(user?.id);
    },
  });
  return (
    <div className='mx-auto max-w-xl px-4 sm:px-0'>
      <PomodoroTimer />
      {user ? (
        <div className='space-y-4'>
          <hr />
          <div className='flex items-center gap-2'>
            <h2 className='text-2xl font-semibold'>Todos</h2>
            <Button size='sm' variant='outline'>
              Add Todo
            </Button>
          </div>
          <TodoTable columns={columns} data={data ?? []} />
        </div>
      ) : null}
    </div>
  );
};

export default Home;
