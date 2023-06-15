import { useEffect } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/base';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/form';
import Input from '@/components/form/input/Input';
import { findConfigByUserId, upsertConfig } from '@/domains/config/api-endpoints';
import type { UserData } from '@/providers/auth/types';
import type { PomodoroFormType } from '@/types/pomodoro';
import { PomodoroFormSchema } from '@/types/pomodoro';
import { useToast } from '@/utils/useToast';

const ConfigForm = ({ user }: { user: UserData }) => {
  const { toast } = useToast();

  const { data, isLoading } = useQuery({
    queryKey: ['pomodoro-settings', user.id],
    queryFn: () => {
      return findConfigByUserId(user.id);
    },
  });

  const form = useForm<PomodoroFormType>({
    resolver: zodResolver(PomodoroFormSchema),
    defaultValues: {
      focus: data?.focus ?? 25,
      shortBreak: data?.shortBreak ?? 5,
      longBreak: data?.longBreak ?? 15,
    },
  });

  const onSubmit = (data: PomodoroFormType) => {
    mutate(data);
  };

  const { mutate, isLoading: isMutating } = useMutation({
    mutationKey: ['upsert-config', user.id],
    mutationFn: upsertConfig,
    onSuccess: () => {
      toast({
        description: 'Your config has been updated.',
      });
    },
    onError: () => {
      toast({
        title: 'Failed to update your config.',
        description: 'Your config has not been updated.',
        variant: 'destructive',
      });
    },
  });

  useEffect(() => {
    if (data) {
      form.reset({
        focus: data.focus,
        shortBreak: data.shortBreak,
        longBreak: data.longBreak,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className='space-y-4'>
      <hr />
      <h4 className='font-medium'>Timer setting</h4>
      {isLoading ? (
        <div className='flex w-full items-center justify-center gap-2 rounded-lg bg-primary/5 py-14'>
          <Loader2 className='h-6 w-6 animate-spin text-primary' />
          <p>We&apos;re loading your config</p>
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            <div className='flex items-center justify-between gap-2'>
              <FormField
                control={form.control}
                name='focus'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Focus</FormLabel>
                    <FormControl>
                      <Input
                        type='number'
                        id='displayName'
                        placeholder='Focus'
                        autoComplete='focus'
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='shortBreak'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Short Break</FormLabel>
                    <FormControl>
                      <Input
                        type='number'
                        id='shortBreak'
                        placeholder='Short Break'
                        autoComplete='short-break'
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='longBreak'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Long Break</FormLabel>
                    <FormControl>
                      <Input
                        type='number'
                        id='longBreak'
                        placeholder='Long Break'
                        autoComplete='long-break'
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className='flex w-full justify-end'>
              <Button type='submit' className='w-full sm:w-1/4' disabled={isMutating}>
                Save
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  );
};

export default ConfigForm;
