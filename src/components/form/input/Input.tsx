import { forwardRef } from 'react';

import { cn } from '@/utils/classnames';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, label, ...props }, ref) => {
    return (
      <div className='space-y-2'>
        <label htmlFor={props.id} className='text-neutral-500 dark:text-input-text-dark'>
          {label}
        </label>
        <input
          className={cn(
            'w-full rounded-md border border-input-border-light px-3 py-2 outline-none focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-input-border-dark dark:bg-input-background-dark dark:text-input-text-dark',
            error ? 'border-red-500' : 'border-neutral-300',
            className,
          )}
          ref={ref}
          {...props}
        />
        {error && <div className='mt-1 text-xs text-red-500'>{error}</div>}
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
