import type { Meta, StoryObj } from '@storybook/react';

import CardDescription from './CardDescription';

const meta: Meta<typeof CardDescription> = {
  title: 'Components/Base/Card/CardDescription',
  component: CardDescription,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CardDescription>;

export const Primary: Story = {
  args: {
    children: 'CardDescription',
  },
};
