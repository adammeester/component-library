import React from 'react';
import { StoryObj } from '@storybook/react';
import { Modal, ModalProps } from './Modal';

const defaultArgs: ModalProps = {
  isOpen: true,
  title: '',
  children: undefined,
  onClose: function (): void {
    throw new Error('Function not implemented.');
  },
};

export default {
  title: 'Common/Modal',
  component: Modal,
  render: (args: any) => <Modal {...args} />,
};
type Story = StoryObj<typeof Modal>;

export const Open: Story = {
  args: {
    location: 'Storybook',
    ...defaultArgs,
  } as ModalProps,
};
