import { Reorder } from 'framer-motion';
import { GripVertical } from 'lucide-react';

import type { Todo } from '../todos/types';

import TodoDropdown from './TodoDropdown';

type TodoListProps = {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
};

const TodoList = ({ todos, setTodos }: TodoListProps) => {
  return (
    <Reorder.Group axis='y' onReorder={setTodos} values={todos} className='space-y-2'>
      {todos.map((todo) => (
        <Reorder.Item
          key={todo.id}
          value={todo}
          className='flex cursor-pointer select-none items-center justify-between gap-4 rounded-lg border bg-white p-2'
        >
          <div className='flex items-center gap-2'>
            <div className='flex-shrink-0'>
              <GripVertical className='h-4 w-4' />
            </div>
            <div>
              <p className='line-clamp-1 overflow-hidden'>{todo.title}</p>
              <p className='line-clamp-1 overflow-hidden text-xs text-muted-foreground'>
                {todo.description}
              </p>
            </div>
          </div>
          <div className='flex-shrink-0'>
            <TodoDropdown todo={todo} />
          </div>
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
};

export default TodoList;
