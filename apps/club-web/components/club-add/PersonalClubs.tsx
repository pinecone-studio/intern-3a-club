/* eslint-disable max-lines,complexity,@nx/workspace/jsx-no-inline-function */
import { useAuth } from '@clerk/nextjs';
import { useQuery } from '@apollo/client/react';
import { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, PencilLine } from 'lucide-react';
import gql from 'graphql-tag';
import { GET_ALL_TEACHERS } from '../../lib/club-query';
import { useClubRealtime } from '../../app/_hooks/use-club-realtime';

const GET_MY_CLUBS_DETAIL = gql`
  query GetAllClubsByCreatorId {
    getAllClubsByCreatorId {
      id
      name
      description
      teacherId
      type
      status
      preferredTeachers
      minMember
      maxMember
      frequency
      clubTerm
      timetables {
        id
        date
        room
        clubStartTime
        duration
      }
      members {
        id
        studentId
      }
    }
  }
`;

type MyClub = {
  id: string;
  name: string;
  description?: string | null;
  teacherId?: string | null;
  status?: string;
  type?: string;
  preferredTeachers?: string[] | null;
  minMember?: number | null;
  maxMember?: number | null;
  frequency?: string | null;
  clubTerm?: string | null;
  timetables?:
    | {
        id: string;
        date?: string | null;
        room?: string | null;
        clubStartTime?: string | null;
        duration?: number | null;
      }[]
    | null;
  members?: { id: string; studentId?: string | null }[] | null;
};

type Teacher = {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
};

const toClubArray = (value: unknown): MyClub[] =>
  Array.isArray(value) ? (value as MyClub[]) : [];

const toTeacherArray = (value: unknown): Teacher[] =>
  Array.isArray(value) ? (value as Teacher[]) : [];

export const MyClubsList = () => {
  const { isLoaded, userId, getToken } = useAuth();
  const [token, setToken] = useState<string | null | undefined>(undefined);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    if (!isLoaded) return;
    if (!userId) {
      setToken(null);
      return;
    }

    let isMounted = true;
    getToken()
      .then((value) => {
        if (isMounted) setToken(value);
      })
      .catch(() => {
        if (isMounted) setToken(null);
      });

    return () => {
      isMounted = false;
    };
  }, [isLoaded, userId, getToken]);

  const { data, loading, error, refetch: refetchMyClubs } = useQuery<{
    getAllClubsByCreatorId: MyClub[];
  }>(GET_MY_CLUBS_DETAIL, {
    skip: !isLoaded || !userId || !token,
    fetchPolicy: 'cache-and-network',
    context: token
      ? {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      : undefined,
  });

  const { data: teacherData, refetch: refetchTeachers } = useQuery<{ getAllTeachers: Teacher[] }>(
    GET_ALL_TEACHERS,
    {
      skip: !isLoaded || !userId || !token,
      fetchPolicy: 'cache-and-network',
      context: token
        ? {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        : undefined,
    }
  );
  console.log(data, 'data');

  const clubs = toClubArray(data?.getAllClubsByCreatorId);
  const teachers = toTeacherArray(teacherData?.getAllTeachers);
  const teacherNameById = new Map(
    teachers.map((teacher) => [
      teacher.id,
      `${teacher.firstName ?? ''} ${teacher.lastName ?? ''}`.trim() ||
        teacher.id,
    ])
  );
  console.log(data, 'data');

  const myClubs = clubs.filter((club) => club.status === 'approved');
  const myClubIds = myClubs.map((club) => club.id);

  const handleRealtimeEvent = useCallback(() => {
    void refetchMyClubs();
    void refetchTeachers();
  }, [refetchMyClubs, refetchTeachers]);

  useClubRealtime({
    clubIds: myClubIds,
    onEvent: handleRealtimeEvent,
  });

  return (
    <section className="space-y-4">
      <h3 className="flex items-center gap-3 text-sm font-semmibold tracking-[0.1em] uppercase text-white/40">
        <PencilLine size={16} /> Миний Клубууд
      </h3>
      {loading && (
        <div className="p-6 rounded-[2rem] bg-white/5 border border-white/10 text-sm text-white/50">
          Ачаалж байна...
        </div>
      )}
      {!loading && error && (
        <div className="p-6 rounded-[2rem] bg-rose-500/10 border border-rose-500/20 text-sm text-rose-200">
          Клуб ачааллахад алдаа гарлаа: {error.message}
        </div>
      )}
      {!loading && !error && myClubs.length === 0 && (
        <div className="p-6 rounded-[2rem] bg-white/5 border border-white/10 text-sm text-white/50">
          Approved болсон клуб одоогоор алга байна.
        </div>
      )}
      {!loading &&
        myClubs.map((club) => (
          <motion.button
            key={club.id}
            type="button"
            onClick={() =>
              setExpandedId((prev) => (prev === club.id ? null : club.id))
            }
            className="group w-full text-left p-6 rounded-[2rem] bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center text-white font-black shadow-lg shadow-primary/20">
                  {club.name[0]}
                </div>
                <div>
                  <h4 className="font-semmibold text-xl text-white">
                    {club.name}
                  </h4>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest">
                    {club.members?.length ?? 0} Гишүүд • {club.type ?? 'self'}
                  </p>
                </div>
              </div>
              <div className="text-white/50">
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${
                    expandedId === club.id ? 'rotate-180' : ''
                  }`}
                />
              </div>
            </div>

            {expandedId === club.id && (
              <div className="mt-5 pt-5 border-t border-white/10 space-y-4">
                <div className="text-xs text-white/70">
                  <p className="text-white/40 mb-1">Description:</p>
                  <p>{club.description || 'Тайлбар байхгүй'}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-white/70">
                  <p>
                    <span className="text-white/40">Club Teacher:</span>{' '}
                    {club.teacherId
                      ? teacherNameById.get(club.teacherId) ?? club.teacherId
                      : '-'}
                  </p>
                  {/* <p>
                    <span className="text-white/40">Preferred Teachers:</span>{' '}
                    {club.preferredTeachers?.length
                      ? club.preferredTeachers
                          .map((id) => teacherNameById.get(id) ?? id)
                          .join(', ')
                      : '-'}
                  </p> */}
                  {/* <p>
                    <span className="text-white/40">Term:</span>{' '}
                    {club.clubTerm ?? '-'}
                  </p> */}
                  <p>
                    <span className="text-white/40">Status: </span>{' '}
                    {club.status ?? 'unknown'}
                  </p>
                  <p>
                    <span className="text-white/40">Frequency:</span>{' '}
                    {club.frequency ?? '-'}
                  </p>
                  {/* <p>
                    <span className="text-white/40">Type:</span>{' '}
                    {club.type ?? 'self'}
                  </p> */}
                  {/* <p>
                    <span className="text-white/40">Min/Max:</span>{' '}
                    {club.minMember ?? '-'} /
                  </p> */}
                  <p>
                    <span className="text-white/40">Members:</span>{' '}
                    {club.members?.length ?? 0} /{club.maxMember ?? '-'}
                  </p>{' '}
                  <p>
                    <span className="text-white/40">
                      Days:<span className="text-white/70"> Tue , Wed</span>{' '}
                    </span>{' '}
                  </p>
                </div>

                <div className="text-xs text-white/70">
                  <p className="text-white/40 mb-2">Timetables:</p>
                  {club.timetables?.length ? (
                    <div className="space-y-2">
                      {club.timetables.map((item) => (
                        <div
                          key={item.id}
                          className="p-3 rounded-xl bg-white/5 border border-white/10"
                        >
                          {item.date ?? '-'} • {item.clubStartTime ?? '-'} •{' '}
                          {item.room ?? '-'} • {item.duration ?? 0} min
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p>Хуваарь алга</p>
                  )}
                </div>
              </div>
            )}
          </motion.button>
        ))}
    </section>
  );
};
