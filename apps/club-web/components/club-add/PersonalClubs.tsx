import { useAuth } from '@clerk/nextjs';
import { useQuery } from '@apollo/client/react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { PencilLine } from 'lucide-react';
import { GET_ALL_CLUBS_BY_CREATOR_ID } from '../../lib/club-query';

type MyClub = {
  id: string;
  name: string;
  status?: string;
  type?: string;
  members?: { id: string }[];
};

export const MyClubsList = () => {
  const { isLoaded, userId, getToken } = useAuth();
  const [token, setToken] = useState<string | null | undefined>(undefined);

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

  const { data, loading, error } = useQuery<{ getAllClubsByCreatorId: MyClub[] }>(
    GET_ALL_CLUBS_BY_CREATOR_ID,
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

  const myClubs = (data?.getAllClubsByCreatorId ?? []).filter(
    (club) => club.status === 'approved'
  );

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
          <motion.div
            key={club.id}
            className="group flex items-center justify-between p-6 rounded-[2rem] bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 backdrop-blur-xl"
          >
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center text-white font-black shadow-lg shadow-primary/20">
                {club.name[0]}
              </div>
              <div>
                <h4 className="font-semmibold text-xl text-white">{club.name}</h4>
                <p className="text-[10px] text-white/40 uppercase tracking-widest">
                  {club.members?.length ?? 0} Гишүүд • {club.type ?? 'self'}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
    </section>
  );
};
