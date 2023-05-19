import { forwardRef } from 'react';

import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/classnames';

const buttonVariants = cva(
  ['inline-flex items-center font-medium justify-center rounded-md duration-200'],
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-white hover:bg-primary-600 disabled:bg-gray-200 disabled:text-gray-400 disabled:hover:bg-gray-200 disabled:hover:cursor-not-allowed dark:bg-primary-300 dark:hover:bg-primary dark:text-white dark:hover:text-white',
        secondary:
          'bg-primary-100 text-primary-900 hover:bg-primary-200 disabled:bg-gray-200 disabled:text-gray-400 disabled:hover:bg-gray-200 disabled:hover:cursor-not-allowed',
        outlined:
          'bg-transparent border border-primary text-primary hover:bg-primary hover:text-white disabled:border-gray-200 disabled:text-gray-400 disabled:hover:bg-transparent disabled:hover:border-gray-200 disabled:hover:text-gray-400',
        text: 'bg-transparent text-primary hover:underline hover:text-primary-600 disabled:text-gray-400 disabled:hover:bg-transparent disabled:hover:text-gray-400 dark:text-primary-200 dark:hover:text-primary-300 dark:hover:bg-transparent',
      },
      color: {
        primary:
          'bg-primary text-white hover:bg-primary-600 dark:bg-primary-300 dark:hover:bg-primary',
        red: 'bg-red-500 text-white hover:bg-red-600 dark:bg-red-500 dark:hover:bg-red-600',
        teal: 'bg-teal-vivid text-white hover:bg-teal-vivid-600 dark:bg-teal-vivid-300 dark:hover:bg-teal-vivid-400',
        neutral:
          'bg-neutrals text-white hover:bg-neutrals-600 dark:bg-neutrals-300 dark:hover:bg-neutrals-400',
        yellow:
          'bg-yellow-vivid text-black hover:bg-yellow-vivid-600 dark:bg-yellow-vivid-300 dark:hover:bg-yellow-vivid-400',
      },
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
  ({ className, size = 'md', color = 'primary', variant = 'primary', ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ size, variant, color, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';

export default Button;
