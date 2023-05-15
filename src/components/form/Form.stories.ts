import type { Meta, StoryObj } from '@storybook/react';

import Input from './input/Input';

const meta = {
  title: 'Components/Form',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

export const TextField: Story = {
  args: {
    placeholder: 'Placeholder',
    label: 'Label',
  },
};
