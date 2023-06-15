import { useQuery } from '@tanstack/react-query';

import { findAllTodosByUserId } from '@/domains/todo/api-endpoints';
import { useAuthContext } from '@/providers/auth/AuthProvider';

import { columns } from './columns';
import TodoTable from './TodoTable';

const Todos = () => {
  const { user } = useAuthContext();

  const { data } = useQuery({
    queryKey: ['all-todos', user?.id],
    queryFn: () => {
      return findAllTodosByUserId(user?.id);
    },
    enabled: !!user?.id,
  });
  return (
    <div className='mx-auto max-w-3xl space-y-4 px-4 sm:px-0'>
      <h1 className='text-xl font-semibold'>Todos</h1>
      <TodoTable columns={columns} data={data ?? []} />
    </div>
  );
};

export default Todos;
