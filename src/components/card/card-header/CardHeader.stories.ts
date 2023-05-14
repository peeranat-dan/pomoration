import type { Meta, StoryObj } from '@storybook/react';

import CardHeader from './CardHeader';

const meta = {
  title: 'Components/Base/Card/CardHeader',
  component: CardHeader,
  tags: ['autodocs'],
} satisfies Meta<typeof CardHeader>;

export default meta;

type Story = StoryObj<typeof CardHeader>;

export const Primary: Story = {
  args: {
    children: 'CardHeader',
  },
};
