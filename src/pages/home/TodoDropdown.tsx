import { useMutation } from '@tanstack/react-query';
import { MoreHorizontal } from 'lucide-react';

import { Button } from '@/components/base';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/dropdown-menu';
import { finishedTodo } from '@/domains/todo/api-endpoints';
import { queryClient } from '@/providers/QueryProvider';

import type { Todo } from './types';

type TodoDropdownProps = {
  todo: Todo;
};

const TodoDropdown = ({ todo }: TodoDropdownProps) => {
  const { mutate: finishTodo } = useMutation({
    mutationKey: ['finishedTodo'],
    mutationFn: finishedTodo,
    onSuccess: () => {
      queryClient.refetchQueries(['todos', todo.user_id]);
    },
  });
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='h-8 w-8 p-0'>
          <span className='sr-only'>Open menu</span>
          <MoreHorizontal className='h-4 w-4' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuLabel className='select-none'>Actions</DropdownMenuLabel>
        <DropdownMenuItem onClick={async () => await finishTodo(todo.id)}>
          Finish todo
        </DropdownMenuItem>
        {/* <DropdownMenuSeparator />
            <DropdownMenuItem>Edit todo</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TodoDropdown;
