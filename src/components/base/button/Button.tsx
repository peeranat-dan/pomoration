import { twMerge } from 'tailwind-merge';

const SIZES_STYLES = {
  sm: 'px-2 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

const VARIANT_STYLES = {
  primary:
    'bg-primary-100 text-primary-900 hover:bg-primary-200 duration-200 disabled:bg-gray-200 disabled:text-gray-400 disabled:hover:bg-gray-200 disabled:hover:cursor-not-allowed',
  outlined:
    'bg-transparent border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white duration-200 disabled:border-gray-200 disabled:text-gray-400 disabled:hover:bg-transparent disabled:hover:border-gray-200 disabled:hover:text-gray-400',
  text: 'bg-transparent text-primary-500 hover:underline hover:text-primary-600 duration-200 disabled:text-gray-400 disabled:hover:bg-transparent disabled:hover:text-gray-400',
};

export type ButtonSize = keyof typeof SIZES_STYLES;
export type ButtonVariant = keyof typeof VARIANT_STYLES;

export interface ButtonProps extends React.ComponentProps<'button'> {
  children: React.ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
}

const Button = ({
  children,
  className,
  size = 'md',
  variant = 'primary',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={twMerge(
        'box-border rounded-md',
        SIZES_STYLES[size],
        VARIANT_STYLES[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
