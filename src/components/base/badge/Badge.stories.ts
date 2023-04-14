import type { Meta, StoryObj } from '@storybook/react';

import Badge from './Badge';

const meta = {
  title: 'Components/Base/Badge',
  component: Badge,
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Badge',
  },
};
