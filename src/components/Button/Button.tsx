import React, { ReactNode } from 'react';
import { hoverEffects, styles, variants } from './Button.css';
import { classNames } from '../../utils/classNames';

export type ButtonVariants = 'primary' | 'secondary' | 'action' | 'icon';
export type IconPosition = 'left' | 'right';

export type ButtonProps = {
  label?: string;
  variant?: ButtonVariants;
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  action?: 'button' | 'submit' | 'reset';
  icon?:
    | React.ReactSVGElement
    | React.DetailedHTMLProps<
        React.ImgHTMLAttributes<HTMLImageElement>,
        HTMLImageElement
      >;
  hoverEffectsEnabled?: boolean;
  iconPosition?: IconPosition;
  onClick?: (e: any) => void;
};
//TODO: Add icons to button
export const Button = ({
  label,
  action = 'button',
  variant = 'primary',
  className,
  children,
  icon,
  iconPosition,
  hoverEffectsEnabled = true,
  disabled = false,
  onClick,
}: ButtonProps) => {
  const handleClick = (event: any) => {
    onClick && onClick(event);
    if (action === 'submit' && event?.target.form) {
      event.target.form.submit();
    }
  };

  return (
    <button
      type={action}
      disabled={disabled}
      className={classNames(
        variants[variant],
        hoverEffects({ enabled: hoverEffectsEnabled }),
        className
      )}
      onClick={(e) => handleClick(e)}
    >
      <span className={styles.buttonContent}>
        {icon && iconPosition === 'left' ? <>{icon}</> : null}
        {label}
        {icon && iconPosition === 'right' ? <>{icon}</> : null}
      </span>
      {children}
    </button>
  );
};
