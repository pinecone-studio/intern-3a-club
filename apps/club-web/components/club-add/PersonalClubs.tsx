import { motion } from 'framer-motion';
import { PencilLine } from 'lucide-react';

export const MyClubsList = () => {
  const myClubs = [
    {
      id: 'CLUB-1',
      name: 'Leet Code Club',
      members: 15,
      category: 'Technology',
    },
  ];

  return (
    <section className="space-y-4">
      <h3 className="flex items-center gap-3 text-sm font-semmibold tracking-[0.1em] uppercase text-white/40">
        <PencilLine size={16} /> Миний Клубууд
      </h3>
      {myClubs.map((club) => (
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
                {club.members} Гишүүд • {club.category}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
};
