import { useMutation } from '@tanstack/react-query';
import { Check, MoreHorizontal, Trash } from 'lucide-react';

import { Button } from '@/components/base';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/dropdown-menu';
import { deleteTodo, finishedTodo } from '@/domains/todo/api-endpoints';
import { queryClient } from '@/providers/QueryProvider';
import { useDisclosure } from '@/utils/useDisclosure';

import DeleteTodoModal from './DeleteTodoModal';
import type { Todo } from './types';

type TodoDropdownProps = {
  todo: Todo;
};

const TodoDropdown = ({ todo }: TodoDropdownProps) => {
  const [isOpen, { open, toggle }] = useDisclosure(false);
  const { mutate: finishTodo } = useMutation({
    mutationKey: ['finishedTodo'],
    mutationFn: finishedTodo,
    onSuccess: () => {
      queryClient.refetchQueries(['todos', todo.user_id]);
    },
  });
  const { mutate: deleteTodoMutation, isLoading: isDeleting } = useMutation({
    mutationKey: ['deleteTodo'],
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.refetchQueries(['todos', todo.user_id]);
    },
  });

  const onConfirmDelete = async () => {
    deleteTodoMutation(todo.id);
  };

  return (
    <>
      <DeleteTodoModal
        open={isOpen}
        onOpenChange={toggle}
        onConfirmDelete={onConfirmDelete}
        isLoading={isDeleting}
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost' className='h-8 w-8 p-0'>
            <span className='sr-only'>Open menu</span>
            <MoreHorizontal className='h-4 w-4' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuLabel className='select-none'>Actions</DropdownMenuLabel>
          <DropdownMenuItem className='items-center gap-2' onClick={() => finishTodo(todo.id)}>
            <Check className='h-4 w-4' />
            Finish todo
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          {/* <DropdownMenuItem>Edit todo</DropdownMenuItem> */}
          <DropdownMenuItem
            className='items-center gap-2 text-red-500 hover:text-red-600'
            onClick={open}
          >
            <Trash className='h-4 w-4' /> Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default TodoDropdown;
