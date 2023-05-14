import type { Meta, StoryObj } from '@storybook/react';

import Avatar from './Avatar';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof Avatar>;

export const ImageAvatar = (args: Story['args']) => (
  <Avatar.Image src='https://avatars.githubusercontent.com/u/25190563?v=4' alt='avatar' {...args} />
);

export const TextAvatar = (args: Story['args']) => <Avatar.Text {...args}>A</Avatar.Text>;
