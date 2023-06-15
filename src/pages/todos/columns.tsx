import type { ColumnDef } from '@tanstack/react-table';

import TodoBadge from './TodoBadge';
import type { Todo } from './types';

const columns: ColumnDef<Todo>[] = [
  {
    header: 'Title',
    accessorKey: 'title',
  },
  {
    header: 'Description',
    accessorKey: 'description',
  },
  //   {
  //     id: 'actions',
  //     cell: ({ row }) => {
  //       const todo = row.original;

  //       //   return <TodoDropdown todo={todo} />;
  //       return <></>;
  //     },
  //   },
  {
    id: 'status',
    cell: ({ row }) => {
      const todo = row.original;

      return <TodoBadge deletedAt={todo.deletedAt} finishedAt={todo.finishedAt} />;
    },
  },
];

export { columns };
