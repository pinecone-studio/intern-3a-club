import { format } from 'date-fns';

type Props = {
  months: Date[];
};

export const MilestoneHeader = ({ months }: Props) => {
  return (
    <div className="grid grid-cols-[220px_repeat(12,1fr)] border-b bg-muted/30">
      <div className="p-3 text-sm font-semibold">Clubs</div>

      {months.map((m) => (
        <div key={m.toISOString()} className="text-center text-xs border-l p-2">
          {format(m, 'MMM')}
        </div>
      ))}
    </div>
  );
};
