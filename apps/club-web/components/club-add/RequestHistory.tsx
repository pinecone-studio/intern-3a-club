import { Club, History } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useQuery } from '@apollo/client/react';

import gql from 'graphql-tag';
import React from 'react';

export interface MyClubs {
  getAllClubsByCreatorId: GetAllClubsByCreatorId[];
}

export interface GetAllClubsByCreatorId {
  __typename: string;
  id: string;
  name: string;
  description: string;
  teacherId: string;
  preferredTeachers: string[];
  type: string;
  frequency: string;
  clubTerm: string;
  minMember: number;
  maxMember: number;
  status: string;
  creatorId: string;
  timetables: Timetable[];
}
export interface Timetable {
  __typename: string;
  id: string;
  clubId: string;
  date: string;
  room: string;
  clubStartTime: string;
  duration: number;
}

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

export const GET_MY_CLUBS = gql`
  query GetAllClubsByCreatorId {
    getAllClubsByCreatorId {
      id
      name
      description
      teacherId
      preferredTeachers
      type
      frequency
      clubTerm
      minMember
      maxMember
      status
      creatorId
      timetables {
        id
        clubId
        date
        room
        clubStartTime
        duration
      }
    }
  }
`;

const RequestRow: React.FC<{
  req: GetAllClubsByCreatorId;
}> = ({ req }) => {
  const { statusClass, badgeClass } = getStatusClasses(req.status);
  const statusText = req.status ?? 'unknown';
  const { loading, error, data } = useQuery<MyClubs>(GET_MY_CLUBS);

  console.log(data);
  return (
    <div>
      <div>MyClubs</div>
      <div className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all group/item">
        {data?.getAllClubsByCreatorId.map((club) => (
          <div className="flex items-center gap-4" key={club.id}>
            <div>
              <div
                className={cn(
                  'h-2 w-2 rounded-full shadow-[0_0_8px]',
                  statusClass
                )}
              />
              <div>
                <h5 className="text-sm font-bold text-white group-hover/item:text-primary transition-colors">
                  {club.name}
                </h5>
                <p className="text-[9px] text-white/30 font-black uppercase tracking-tighter">
                  {club.status}
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
        ))}
      </div>
      return (
      <section className="space-y-4">
        <h3 className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-white/40">
          <History size={16} /> Илгээсэн хүсэлтүүд
        </h3>
        <div className="space-y-3 max-h-[260px] lg:max-h-[360px] overflow-y-auto pr-2 scrollbar-hide">
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
            : Club.map((club) => <RequestRow key={club.id} req={club} />)}
        </div>
      </section>
      )
    </div>
  );
};
