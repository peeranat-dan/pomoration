import type { Meta, StoryObj } from '@storybook/react';

import CardContent from './CardContent';

const meta: Meta<typeof CardContent> = {
  title: 'Components/Base/Card/CardContent',
  component: CardContent,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CardContent>;

export const Primary: Story = {
  args: {
    children: 'CardContent',
  },
};
