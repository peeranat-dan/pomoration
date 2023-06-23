import { forwardRef } from 'react';

import type { VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/classnames';

import { buttonVariants } from './constants';

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size = 'md', variant = 'default', ...props }, ref) => {
    return (
      <button className={cn(buttonVariants({ size, variant, className }))} ref={ref} {...props} />
    );
  },
);

Button.displayName = 'Button';

export default Button;
