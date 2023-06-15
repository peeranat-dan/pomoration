import { DialogClose } from '@radix-ui/react-dialog';

import { Button } from '@/components/base';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/dialog';

type DeleteTodoModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirmDelete: () => void;
  isLoading: boolean;
};

const DeleteTodoModal = ({
  isLoading,
  open,
  onOpenChange,
  onConfirmDelete,
}: DeleteTodoModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='space-y-4'>
        <DialogHeader>
          <DialogTitle>Are you sure you want to delete this?</DialogTitle>
        </DialogHeader>
        <div className='flex flex-col gap-2 md:flex-row-reverse'>
          <Button
            variant='destructive'
            onClick={onConfirmDelete}
            type='submit'
            disabled={isLoading}
            className='w-full md:w-fit'
          >
            Delete
          </Button>
          <DialogClose asChild>
            <Button variant='outline' disabled={isLoading} className='w-full md:w-fit'>
              Cancel
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteTodoModal;
