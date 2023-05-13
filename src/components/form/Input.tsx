import type { FieldValues, Path, UseFormRegister } from 'react-hook-form';

import { cn } from '@/utils/classnames';

interface InputProps<TFieldValues extends FieldValues>
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  name: Path<TFieldValues>;
  register: UseFormRegister<TFieldValues>; // declare register props
  error?: string;
}

const Input = <TFieldValues extends FieldValues = FieldValues>({
  error,
  className,
  register,
  label,
  name,
  ...props
}: InputProps<TFieldValues>) => {
  return (
    <div className='space-y-2'>
      <label htmlFor={props.id} className='text-neutral-500 dark:text-neutral-400'>
        {label}
      </label>
      <input
        className={cn(
          'w-full rounded-md border px-3 py-2 outline-none focus:border-transparent focus:ring-2 focus:ring-primary-500',
          error ? 'border-red-500' : 'border-neutral-300',
          className,
        )}
        {...props}
        {...register(name)}
      />
      {error && <div className='mt-1 text-xs text-red-500'>{error}</div>}
    </div>
  );
};

export default Input;
