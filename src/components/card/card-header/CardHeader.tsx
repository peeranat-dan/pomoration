import { forwardRef } from 'react';

import { cn } from '@/utils/classnames';

const CardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div className={cn('flex flex-col space-y-1.5 p-6', className)} ref={ref} {...props} />
  ),
);

CardHeader.displayName = 'CardHeader';

export default CardHeader;
