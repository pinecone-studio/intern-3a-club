import { ReactNode } from 'react';

export const ScrollArea = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={`overflow-y-auto scrollbar-hide ${className}`}>
      {children}
    </div>
  );
};
