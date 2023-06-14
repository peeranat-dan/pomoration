import type { ColumnDef } from '@tanstack/react-table';
import {
  //  MoreHorizontal,
  Trash,
} from 'lucide-react';

import { Button } from '@/components/base';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from '@/components/dropdown-menu';

type Todo = {
  id: number;
  title: string;
  description: string | null;
};

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

      return (
        <Button
          variant='ghost'
          onClick={() => {
            console.log('delete', todo.id);
          }}
        >
          <Trash className='h-4 w-4 text-red-500' />
        </Button>
      );

      // return (
      //   <DropdownMenu>
      //     <DropdownMenuTrigger asChild>
      //       <Button variant='ghost' className='h-8 w-8 p-0'>
      //         <span className='sr-only'>Open menu</span>
      //         <MoreHorizontal className='h-4 w-4' />
      //       </Button>
      //     </DropdownMenuTrigger>
      //     <DropdownMenuContent align='end'>
      //       <DropdownMenuLabel className='select-none'>Actions</DropdownMenuLabel>
      //       <DropdownMenuSeparator />
      //       <DropdownMenuItem>Edit todo</DropdownMenuItem>
      //       <DropdownMenuItem>Delete</DropdownMenuItem>
      //     </DropdownMenuContent>
      //   </DropdownMenu>
      // );
    },
  },
];

export { columns };
