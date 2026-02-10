import { AnimatePresence, motion } from "framer-motion";
import { Calendar, Clock, DoorOpen, Users2 } from "lucide-react";
import { DetailTile } from "./Admin-Club-Detail-Tile";
import type { ClubRequest } from "./Admin-Club-Types";

type RequestExpandedSectionProps = {
  request: ClubRequest;
  isExpanded: boolean;
  isPrimary: boolean;
};

export const RequestExpandedSection = ({ request, isExpanded, isPrimary }: RequestExpandedSectionProps) => (
  <AnimatePresence>
    {isExpanded ? (
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.4, ease: "circOut" }}
      >
        <div className="px-8 pb-8 pt-2 border-t border-white/5 mx-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">
            <div className="space-y-6">
              <div>
                <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em] mb-3">Клубын Зорилго</p>
                <p className="text-sm text-white/70 leading-relaxed italic">{request.goal}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <DetailTile icon={<Clock size={14} />} label="Schedule" value={request.time} />
                <DetailTile icon={<DoorOpen size={14} />} label="Room" value={request.room} />
                <DetailTile icon={<Users2 size={14} />} label="Students" value={request.students} />
                <DetailTile icon={<Calendar size={14} />} label="Recurrence" value={request.repeat} />
              </div>
            </div>

            <div hidden={!isPrimary} className="flex flex-col justify-end gap-3">
              <div className="flex gap-3">
                <button className="flex-1 py-4 rounded-2xl bg-emerald-500 text-black font-black uppercase text-xs hover:bg-emerald-400 hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                  Approve Squad
                </button>
                <button className="flex-1 py-4 rounded-2xl bg-white/5 border border-white/10 text-red-400 font-black uppercase text-xs hover:bg-red-500/10 transition-all">
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    ) : null}
  </AnimatePresence>
);
