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
      size: {
        sm: 'px-2 py-1 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
      },
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size = 'md', variant = 'primary', ...props }, ref) => {
    return (
      <button className={cn(buttonVariants({ size, variant, className }))} ref={ref} {...props} />
    );
  },
);

Button.displayName = 'Button';

export default Button;
