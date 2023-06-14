import { forwardRef } from 'react';

import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/classnames';

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
  ],
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'underline-offset-4 hover:underline text-primary',
      },
      // color: {
      //   primary:
      //     'bg-primary text-white dark:text-black hover:bg-primary/90  dark:bg-primary dark:hover:bg-primary/80',
      //   red: 'bg-red-500 text-white hover:bg-red-600 dark:bg-red-500 dark:hover:bg-red-600',
      //   teal: 'bg-teal-vivid text-white hover:bg-teal-vivid-600 dark:bg-teal-vivid-300 dark:hover:bg-teal-vivid-400',
      //   neutral:
      //     'bg-neutrals text-white hover:bg-neutrals-600 dark:bg-neutrals-300 dark:hover:bg-neutrals-400',
      //   yellow:
      //     'bg-yellow-vivid text-black hover:bg-yellow-vivid-600 dark:bg-yellow-vivid-300 dark:hover:bg-yellow-vivid-400',
      // },
      size: {
        sm: 'px-2 py-1 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
      },
    },
  },
);

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
