import { StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './Button';
import { BsChatSquare } from 'react-icons/bs';

const defaultArgs: ButtonProps = {};

export default {
  title: 'Common/Button',
  component: Button,
};
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    ...defaultArgs,
    label: 'Default',
    variant: 'primary',
  } as ButtonProps,
};

export const Action: Story = {
  args: {
    ...defaultArgs,
    label: 'Action',
    variant: 'action',
  } as ButtonProps,
};

export const IconOnly: Story = {
  args: {
    ...defaultArgs,
    variant: 'icon',
    label: undefined,
    icon: <BsChatSquare />,
  },
};
