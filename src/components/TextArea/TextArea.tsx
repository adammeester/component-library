import { classNames } from '@/components/utils/classNames';
import React from 'react';
import { styles } from './TextArea.css';

export type TextAreaProps = {
  name: string;
  label: string;
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export const TextArea = ({
  name,
  label,
  className,
  onChange,
}: TextAreaProps) => {
  return (
    <>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <textarea
        name={name}
        onChange={onChange}
        className={classNames(styles.textArea, className || '')}
      />
    </>
  );
};
