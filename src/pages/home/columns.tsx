import type { ColumnDef } from '@tanstack/react-table';

import TodoDropdown from './TodoDropdown';
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
  {
    id: 'actions',
    cell: ({ row }) => {
      const todo = row.original;

      return <TodoDropdown todo={todo} />;
    },
  },
];

export { columns };
