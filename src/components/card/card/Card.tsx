import { forwardRef } from 'react';

import { cn } from '@/utils/classnames';

const Card = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn('overflow-hidden rounded-lg border text-black shadow-sm', className)}
        ref={ref}
        {...props}
      />
    );
  },
);

Card.displayName = 'Card';

export default Card;
