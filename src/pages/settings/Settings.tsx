import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { Github } from 'lucide-react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/base';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/form';
import Input from '@/components/form/input';
import ThemeToggle from '@/containers/theme-toggle/ThemeToggle';
import { updateUser } from '@/domains/profile/api-endpoints';
import { useAuthContext } from '@/providers/auth/AuthProvider';
import type { ProfileFormType } from '@/types/auth';
import { ProfileFormSchema } from '@/types/auth';
import { env } from '@/utils/config';
import { useToast } from '@/utils/useToast';

import ConfigForm from './ConfigForm';

const Settings = () => {
  const { user } = useAuthContext();
  const { toast } = useToast();

  const form = useForm<ProfileFormType>({
    resolver: zodResolver(ProfileFormSchema),
    defaultValues: {
      displayName: user?.displayName ?? '',
    },
  });

  const { mutate, isLoading } = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      toast({
        title: 'Successfully updated your profile.',
        description: 'Your profile has been updated.',
      });
    },
  });

  const onSubmitUpdateUserForm = (data: ProfileFormType) => {
    if (data.displayName === user?.displayName) {
      return;
    }
    mutate(data);
  };

  return (
    <div className='mx-auto max-w-xl space-y-4 px-4 py-2 sm:px-0 sm:py-4'>
      <h1 className='text-2xl font-semibold'>Settings</h1>
      {user ? (
        <>
          <hr />
          <div className='space-y-4'>
            <h4 className='font-medium'>Profile</h4>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmitUpdateUserForm)} className='space-y-4'>
                <FormField
                  control={form.control}
                  name='displayName'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Display Name</FormLabel>
                      <FormControl>
                        <Input
                          type='text'
                          id='displayName'
                          placeholder='Display name'
                          autoComplete='display name'
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <div className='flex w-full justify-end'>
                  <Button type='submit' className='w-full sm:w-1/4' disabled={isLoading}>
                    Save
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </>
      ) : null}
      {user ? <ConfigForm user={user} /> : null}
      <>
        <hr />
        <div className='space-y-4'>
          <h4 className='font-medium'>Appearance</h4>
          <ThemeToggle mode='switch' />
        </div>
      </>
      <>
        <hr />
        <div className='space-y-2'>
          <h4 className='font-medium'>Support</h4>
          <p className='text-sm text-muted-foreground'>
            If you have any questions, drop an issue at{' '}
            <a href={env.repositoryUrl} target='_blank' rel='noreferrer'>
              <Github className='inline-block h-4 w-4' />
            </a>
          </p>
        </div>
      </>
    </div>
  );
};

export default Settings;
