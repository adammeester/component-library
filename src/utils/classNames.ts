import { StyleRule } from '@vanilla-extract/css';

type ClassName = string | StyleRule | undefined;

export function classNames(...classNames: ClassName[]): string {
  return classNames
    .filter(
      (value) => Boolean(value) && typeof value === 'string' && value.length > 0
    )
    .flatMap((className) => className)
    .join(' ');
}
