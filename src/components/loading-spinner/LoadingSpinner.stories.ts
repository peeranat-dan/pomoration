import type { Meta, StoryObj } from '@storybook/react';

import LoadingSpinner from './LoadingSpinner';

const meta = {
  title: 'Components/LoadingSpinner',
  component: LoadingSpinner,
  tags: ['autodocs'],
} satisfies Meta<typeof LoadingSpinner>;

export default meta;

type Story = StoryObj<typeof LoadingSpinner>;

export const Primary: Story = {
  args: {
    className: 'w-10 h-10',
  },
};
