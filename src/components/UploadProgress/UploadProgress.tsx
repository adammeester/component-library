import React from 'react';
import { PulseLoader } from 'react-spinners';
import { styles } from './UploadProgress.css';
import { theme } from '../../theme/Theme.css';
import { classNames } from '../../utils/classNames';

export type UploadProgressProps = {
  progress: number;
  className?: string;
};

export const UploadProgress = ({
  progress,
  className,
}: UploadProgressProps) => {
  return (
    <div className={classNames(styles.container, className)}>
      <div>{progress}%</div>
      <PulseLoader color={theme.palette.primary.contrast} />
    </div>
  );
};
