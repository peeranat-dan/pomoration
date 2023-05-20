import { forwardRef } from 'react';

import { cn } from '@/utils/classnames';

const CardFooter = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn('flex items-center p-6 pt-0', className)} {...props} />
  ),
);

CardFooter.displayName = 'CardFooter';

export default CardFooter;
