import React from 'react';
import { styles } from './FlareTag.css';

export type FlareTagProps = {
  variant: 'new' | 'sale' | 'popular';
  position: 'right' | 'left';
  //   targetElement?: React.RefObject<HTMLDivElement>;
};

export const FlareTag = ({ variant }: FlareTagProps) => {
  //TODO: revisit this
  //   useEffect(() => {
  //     if (targetElement?.current) {
  //       const targetRect = targetElement.current.getBoundingClientRect();
  //       setPosition({
  //         top: targetRect.top + window.pageYOffset,
  //         right: targetRect.left + window.pageXOffset + targetRect.width - 50,
  //       });
  //     }
  //   }, [targetElement]);

  return <div className={styles.container}>NEW</div>;
};
