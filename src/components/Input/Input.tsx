import React from 'react';
import { styles } from './Input.css';
// import { AiOutlineCloudUpload } from 'react-icons/ai/index';
import { classNames } from '../../utils/classNames';
import { acceptedFiles } from '../../utils/constants';

export type InputTypes =
  | 'text'
  | 'password'
  | 'text-area'
  | 'file'
  | 'search'
  | 'date'
  | 'email'
  | 'number';

export type InputVariants = 'default' | 'inline';

export type InputProps = {
  name: string;
  label: string;
  placeholder?: string;
  type: InputTypes;
  variant?: InputVariants;
  value?: string;
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({
  name,
  label,
  placeholder,
  type,
  value,
  className,
  onChange,
}: InputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event);
  };

  switch (type) {
    case 'file':
      return (
        <label className={classNames(styles.fileUpload)} htmlFor={name}>
          {/* <AiOutlineCloudUpload className={styles.uploadImage} /> */}
          {label}
          <input
            id='fileUpload'
            name={name}
            className={styles.fileInput}
            type='file'
            accept={acceptedFiles}
            onChange={(e) => handleChange(e)}
          />
        </label>
      );
    default:
      return (
        <>
          <label className={styles.label} htmlFor={name}>
            {label}
          </label>
          <input
            name={name}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={(e) => handleChange(e)}
            className={classNames(styles.input, className || '')}
          />
        </>
      );
  }
};
