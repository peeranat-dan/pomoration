import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/base';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/form';
import Input from '@/components/form/input';
import { createTodo } from '@/domains/todo/api-endpoints';
import { TodoFormSchema } from '@/types/todo';
import type { TodoFormType } from '@/types/todo';

type AddTodoModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onFinishAddTodo: () => Promise<void>;
};

const AddTodoModal = ({ open, onOpenChange, onFinishAddTodo }: AddTodoModalProps) => {
  const form = useForm<TodoFormType>({
    resolver: zodResolver(TodoFormSchema),
    defaultValues: {
      title: '',
      description: '',
    },
  });
  const { mutateAsync, isLoading } = useMutation(createTodo);

  const onSubmit = async (data: TodoFormType) => {
    await mutateAsync(data);
    form.reset();
    await onFinishAddTodo();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add new todo</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            <FormField
              control={form.control}
              name='title'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      type='text'
                      id='title'
                      placeholder='Title'
                      autoComplete='title'
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='description'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input
                      type='text'
                      id='description'
                      placeholder='Description'
                      autoComplete='description'
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button disabled={isLoading} type='submit' className='w-full'>
              Add
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoModal;
