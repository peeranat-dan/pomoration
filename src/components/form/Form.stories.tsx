import type { Meta, StoryObj } from '@storybook/react';

import Input from './input/Input';
import Label from './label';

const meta = {
  title: 'Components/Form',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

const InputWithLabel = () => {
  return (
    <div className='space-y-2'>
      <Label htmlFor='email'>Email</Label>
      <Input id='email' name='email' />
    </div>
  );
};

export const InputStory: Story = {
  render: () => <InputWithLabel />,
};
