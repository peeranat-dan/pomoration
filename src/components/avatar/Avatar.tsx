import { forwardRef } from 'react';

import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/classnames';

const avatarImageVariants = cva(
  [
    'relative inline-flex items-center select-none justify-center overflow-hidden shrink-0 rounded-full',
  ],
  {
    variants: {
      size: {
        sm: 'w-8 h-8',
        md: 'w-10 h-10',
        lg: 'w-12 h-12',
      },
    },
  },
);

const avatarTextVariants = cva(
  [
    'relative inline-flex items-center select-none justify-center overflow-hidden shrink-0 rounded-full',
  ],
  {
    variants: {
      size: {
        sm: 'w-8 h-8',
        md: 'w-10 h-10',
        lg: 'w-12 h-12',
      },
      variant: {
        primary: 'bg-primary text-white',
      },
    },
  },
);

const Avatar = ({ children }: { children: React.ReactNode }) => <>{children}</>;

export interface AvatarImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement>,
    VariantProps<typeof avatarImageVariants> {}

const Image = forwardRef<HTMLImageElement, AvatarImageProps>(
  ({ className, size = 'md', ...props }, ref) => {
    return <img className={cn(avatarImageVariants({ size, className }))} ref={ref} {...props} />;
  },
);

export interface AvatarTextProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarTextVariants> {}

const Text = forwardRef<HTMLDivElement, AvatarTextProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <div className={cn(avatarTextVariants({ size, variant, className }))} ref={ref} {...props} />
    );
  },
);

Image.displayName = 'AvatarImage';
Text.displayName = 'AvatarText';

Avatar.Image = Image;
Avatar.Text = Text;

export default Avatar;
