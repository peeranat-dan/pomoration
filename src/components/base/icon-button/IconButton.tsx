import { forwardRef } from 'react';

import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/classnames';

const iconButtonVariants = cva(['inline-flex items-center rounded-full'], {
  variants: {
    size: {
      sm: 'p-1',
      md: 'p-2',
      lg: 'p-3',
    },
  },
});

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, size = 'md', ...props }, ref) => {
    return <button className={cn(iconButtonVariants({ size, className }))} ref={ref} {...props} />;
  },
);

IconButton.displayName = 'IconButton';

export default IconButton;
