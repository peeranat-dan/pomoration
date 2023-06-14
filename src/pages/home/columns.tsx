import type { ColumnDef } from '@tanstack/react-table';

// import Checkbox from '@/components/form/checkbox';

import TodoDropdown from './TodoDropdown';
import type { Todo } from './types';

const columns: ColumnDef<Todo>[] = [
  // {
  //   id: 'select',
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={table.getIsAllPageRowsSelected()}
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label='Select all'
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label='Select row'
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },

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
