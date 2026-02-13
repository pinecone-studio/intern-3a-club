import { Club } from '@/libs/types';

export const ClubCardHeader = ({ req }: { req: Club }) => {
  return (
    <div className="flex items-center justify-between pl-5 w-full min-w-0">
      <div className="min-w-0">
        <h3 className="text-xl font-black uppercase truncate">
          {req.name}
        </h3>
        <p className="text-xs text-muted-foreground uppercase truncate">
          {req.leader}
        </p>
      </div>

      <div className="flex items-center gap-6 text-sm font-bold">
        <span>{req.time}</span>
        <span className="opacity-50">|</span>
        <span>{req.room}</span>
      </div>
    </div>
  );
};
