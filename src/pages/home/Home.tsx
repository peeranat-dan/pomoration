import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import { Button } from '@/components/base';
import { findActiveTodosByUserId } from '@/domains/todo/api-endpoints';
import { useAuthContext } from '@/providers/auth/AuthProvider';
import { useDisclosure } from '@/utils/useDisclosure';

import type { Todo } from '../todos/types';

import AddTodoModal from './AddTodoModal';
import PomodoroTimerContainer from './PomdoroTimerContainer';
import TodoList from './TodoList';

const Home = () => {
  const { user } = useAuthContext();
  const [todos, setTodos] = useState<Todo[]>([]);
  const { refetch } = useQuery({
    queryKey: ['todos', user?.id],
    queryFn: () => {
      return findActiveTodosByUserId(user?.id);
    },
    enabled: !!user?.id,
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      setTodos(data);
    },
  });

  const [isOpen, { open, toggle }] = useDisclosure(false);

  const handleRefetch = async () => {
    await refetch();
  };

  return (
    <div className='mx-auto max-w-xl px-4 sm:px-0'>
      <AddTodoModal open={isOpen} onOpenChange={toggle} onFinishAddTodo={handleRefetch} />
      <PomodoroTimerContainer />
      {user ? (
        <div className='space-y-4'>
          <hr />
          <div className='flex items-center gap-4'>
            <h2 className='text-2xl font-semibold'>Todos</h2>
            <Button size='sm' variant='outline' onClick={open}>
              Add Todo
            </Button>
          </div>
          <TodoList todos={todos} setTodos={setTodos} />
        </div>
      ) : null}
    </div>
  );
};

export default Home;
