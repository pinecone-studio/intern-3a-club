import { History } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useQuery } from '@apollo/client/react';
import { GET_ALL_CLUBS } from '../../lib/type';

const getStatusClasses = (
  status?: string
): { statusClass: string; badgeClass: string } => {
  const isApproved = status === 'approved';
  return {
    statusClass: isApproved
      ? 'bg-emerald-500 shadow-emerald-500'
      : 'bg-amber-500 shadow-amber-500',
    badgeClass: isApproved
      ? 'bg-emerald-500/10 text-emerald-500'
      : 'bg-amber-500/10 text-amber-500',
  };
};

const RequestRow: React.FC<{
  req: { id: string; name: string; status?: string };
}> = ({ req }) => {
  const { statusClass, badgeClass } = getStatusClasses(req.status);
  const statusText = req.status ?? 'unknown';

  return (
    <div className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all group/item">
      <div className="flex items-center gap-4">
        <div
          className={cn('h-2 w-2 rounded-full shadow-[0_0_8px]', statusClass)}
        />
        <div>
          <h5 className="text-sm font-semmibold text-white group-hover/item:text-primary transition-colors">
            {req.name}
          </h5>
          <p className="text-[9px] text-white/30 font-semmibold uppercase tracking-tighter">
            {req.id}
          </p>
        </div>
      </div>
      <span
        className={cn(
          'text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full',
          badgeClass
        )}
      >
        {statusText}
      </span>
    </div>
  );
};

export const RequestHistory = () => {
  const { data, loading } = useQuery<{
    getAllClubs: { id: string; name: string; status?: string }[];
  }>(GET_ALL_CLUBS);

  const requests = data?.getAllClubs || [];

  return (
    <section className="space-y-4">
      <h3 className="flex items-center gap-3 text-sm font-semmibold uppercase tracking-[0.1em] text-white/40">
        <History size={16} /> Илгээсэн хүсэлтүүд
      </h3>
      <div
        className="space-y-3 max-h-[260px] lg:max-h-[360px] overflow-y-auto pr-2 scrollbar-hide"
        style={{ scrollbarWidth: 'none' }}
      >
        {loading
          ? Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                data-testid="loading-skeleton"
                className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 transition-all group/item animate-pulse"
              >
                <div className="flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-white/10" />
                  <div className="space-y-1">
                    <div className="h-4 w-40 rounded bg-white/10" />
                    <div className="h-3 w-24 rounded bg-white/5" />
                  </div>
                </div>
                <div className="h-6 w-16 rounded bg-white/10" />
              </div>
            ))
          : requests.map((req) => <RequestRow key={req.id} req={req} />)}
      </div>
    </section>
  );
};
