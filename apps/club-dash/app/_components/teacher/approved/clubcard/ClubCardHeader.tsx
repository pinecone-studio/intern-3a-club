import { Club } from './types';

export const ClubCardHeader = ({ req }: { req: Club }) => {
  return (
    <div className="min-w-0 pl-5">
      <h3 className="text-xl font-black italic uppercase truncate">
        {req.name}
      </h3>
      <p className="text-xs text-muted-foreground uppercase truncate">
        {req.leader}
      </p>
    </div>
  );
};
