import React from 'react';
import { styles } from './ProgressBar.css';

export const ProgressBar = (uploadProgress: number) => {
  return uploadProgress === 100 ? (
    <div>Upload complete!</div>
  ) : uploadProgress > 0 ? (
    <div>
      <div>{`${uploadProgress}%`}</div>
      <progress
        className={styles.progressBar}
        value={uploadProgress}
        max={100}
      />
    </div>
  ) : null;
};
