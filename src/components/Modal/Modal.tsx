import React, { ReactNode } from 'react';
import { Button } from '../Button';
import { styles } from './Modal.css';
import { classNames } from '../../utils/classNames';

export type ModalProps = {
  title: string;
  isOpen: boolean;
  children: ReactNode;
  variant?: 'default' | 'full-screen' | 'popup' | 'side';
  className?: string;
  closeIcon?:
    | React.ReactSVGElement
    | React.DetailedHTMLProps<
        React.ImgHTMLAttributes<HTMLImageElement>,
        HTMLImageElement
      >;
  onClose?: () => void;
};

export const Modal = ({
  isOpen,
  title,
  children,
  variant = 'default',
  className,
  closeIcon,
  onClose,
}: ModalProps) => {
  if (!isOpen) return null;

  //TODO: add escape key close listner

  return (
    <div className={styles.modal} onClick={onClose}>
      <div
        className={classNames(styles.content, className)}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.header}>
          <div className={styles.title}>{title}</div>
          {onClose ? (
            <Button
              variant='icon'
              onClick={onClose}
              className={styles.closeButton}
              icon={closeIcon}
            />
          ) : null}
        </div>
        <div className={styles.body}>{children}</div>
        <div className={styles.footer}></div>
      </div>
    </div>
  );
};
