import { forwardRef } from 'react';

import { cn } from '@/utils/classnames';

const CardDescription = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn('text-sm text-card-description', className)} {...props} />
));

CardDescription.displayName = 'CardDescription';

export default CardDescription;
