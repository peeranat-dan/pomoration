import { cn } from '@/utils/classnames';

const ROUNDED_STYLES = {
  pill: 'rounded-[999px]',
  default: 'rounded-sm',
};

const COLOR_STYLES = {
  primary: 'bg-primary-500 text-white',
  secondary: 'bg-neutral-500 text-white',
  'outlined-primary': 'bg-transparent border border-primary-500 text-primary-500',
  'outlined-secondary': 'bg-transparent border border-neutral-500 text-neutral-500',
};

export type BadgeVariant = keyof typeof ROUNDED_STYLES;
export type BadgeColor = keyof typeof COLOR_STYLES;

export interface BadgeProps extends React.ComponentProps<'div'> {
  children: React.ReactNode;
  rounded?: BadgeVariant;
  color?: BadgeColor;
}

const Badge = ({
  children,
  rounded = 'pill',
  color = 'primary',
  className,
  ...props
}: BadgeProps) => {
  return (
    <div
      className={cn(
        'w-fit select-none px-2 py-1 text-sm font-semibold',
        ROUNDED_STYLES[rounded],
        COLOR_STYLES[color],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Badge;
