import { User } from 'lucide-react';

export const Avatar = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`relative flex h-10 w-10s shrink-0 overflow-hidden rounded-full ${className}`}
    >
      {children}
    </div>
  );
};

export const AvatarImage = () => {
  return (
    <User className="h-full w-full object-cover text-gray-400 items-center justify-center" />
  );
};
