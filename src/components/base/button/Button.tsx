import { cn } from '@/utils/classnames';

const SIZES_STYLES = {
  sm: 'px-2 py-1 text-sm',
  md: 'px-3 py-1 text-base',
  lg: 'px-6 py-3 text-lg',
};

const VARIANT_STYLES = {
  primary:
    'bg-primary text-white hover:bg-primary-600 duration-200 disabled:bg-gray-200 disabled:text-gray-400 disabled:hover:bg-gray-200 disabled:hover:cursor-not-allowed dark:bg-primary-300 dark:hover:bg-primary dark:text-white dark:hover:text-white',
  secondary:
    'bg-primary-100 text-primary-900 hover:bg-primary-200 duration-200 disabled:bg-gray-200 disabled:text-gray-400 disabled:hover:bg-gray-200 disabled:hover:cursor-not-allowed',
  outlined:
    'bg-transparent border border-primary text-primary hover:bg-primary hover:text-white duration-200 disabled:border-gray-200 disabled:text-gray-400 disabled:hover:bg-transparent disabled:hover:border-gray-200 disabled:hover:text-gray-400',
  text: 'bg-transparent text-primary hover:underline hover:text-primary-600 duration-200 disabled:text-gray-400 disabled:hover:bg-transparent disabled:hover:text-gray-400 dark:text-primary-200 dark:hover:text-primary-300 dark:hover:bg-transparent',
};

type ButtonSize = keyof typeof SIZES_STYLES;
type ButtonVariant = keyof typeof VARIANT_STYLES;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
}

const Button = ({
  children,
  className,
  size = 'md',
  variant = 'primary',
  type = 'button',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        'box-border rounded-md',
        SIZES_STYLES[size],
        VARIANT_STYLES[variant],
        className,
      )}
      {...props}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
export type { ButtonProps, ButtonSize, ButtonVariant };
