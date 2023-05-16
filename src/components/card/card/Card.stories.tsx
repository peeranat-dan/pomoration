import type { Meta, StoryObj } from '@storybook/react';

import CardContent from '../card-content/CardContent';
import CardDescription from '../card-description/CardDescription';
import CardHeader from '../card-header/CardHeader';
import CardTitle from '../card-title/CardTitle';

import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Base/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    children: 'Card',
    className: 'p-6',
  },
};

export const CardWithContent = () => {
  return (
    <Card className='w-fit border-none shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_0_16px_1px_#8662C7]'>
      <CardHeader className='space-y-0'>
        <div
          className='flex w-fit cursor-pointer select-none items-center gap-1 text-center duration-100'
          onClick={() => console.log('clicked')}
        >
          <CardTitle className='text-2xl font-normal text-primary-700 dark:text-white'>
            Pomoration
          </CardTitle>
        </div>
        <CardDescription className='mt-0 text-gray-400 dark:text-gray-400'>
          Create a new account
        </CardDescription>
      </CardHeader>
      <CardContent className='space-y-8'>
        <div className='text-center'>
          <p>
            Already have an account?
            <a
              href='/login'
              className='ml-1 cursor-pointer text-primary duration-200 hover:underline dark:text-primary-200'
            >{`Login`}</a>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
