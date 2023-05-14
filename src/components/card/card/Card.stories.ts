import type { Meta, StoryObj } from '@storybook/react';

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
