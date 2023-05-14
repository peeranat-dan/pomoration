import type { Meta, StoryObj } from '@storybook/react';

import CardTitle from './CardTitle';

const meta: Meta<typeof CardTitle> = {
  title: 'Components/Base/Card/CardTitle',
  component: CardTitle,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CardTitle>;

export const Primary: Story = {
  args: {
    children: 'CardTitle',
  },
};
