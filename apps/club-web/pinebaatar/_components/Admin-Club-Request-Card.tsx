import type { MouseEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, Check, ChevronDown, Clock, DoorOpen, Edit3, Users2, X } from "lucide-react";
import { cn } from "./utils";
import { DetailTile } from "./Admin-Club-Detail-Tile";
import type { ClubRequest } from "./Admin-Club-Types";

const RANK_BADGE_BY_ID: Record<number, JSX.Element> = {
  1: (
    <div className="h-6 w-6 rounded-full bg-amber-400 flex items-center justify-center text-[10px] font-black text-black shadow-[0_0_15px_rgba(251,191,36,0.5)]">
      1
    </div>
  ),
  2: (
    <div className="h-6 w-6 rounded-full bg-slate-300 flex items-center justify-center text-[10px] font-black text-black shadow-[0_0_15px_rgba(203,213,225,0.5)]">
      2
    </div>
  ),
  3: (
    <div className="h-6 w-6 rounded-full bg-orange-400 flex items-center justify-center text-[10px] font-black text-black shadow-[0_0_15px_rgba(251,146,60,0.5)]">
      3
    </div>
  ),
};

const getRankBadge = (id: number) =>
  RANK_BADGE_BY_ID[id] ?? <span className="text-white/20 font-bold text-xs ml-2">{id}</span>;

type AdminClubRequestCardProps = {
  request: ClubRequest;
  expandedId: number | null;
  onToggle: (event:MouseEvent<HTMLButtonElement>) => void;
};

export const AdminClubRequestCard = ({ request, expandedId, onToggle }: AdminClubRequestCardProps) => {
  const isPrimary = request.id <= 3;
  const isExpanded = expandedId === request.id;

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-[2rem] border transition-all duration-500",
        isExpanded ? "bg-white/10 border-white/20 shadow-2xl" : "bg-white/5 border-white/5 hover:border-white/10",
        isPrimary && !isExpanded && "border-amber-400/30 bg-amber-400/[0.02]"
      )}
    >
      <div
        className={cn(
          "absolute left-0 top-0 bottom-0 w-1.5 transition-colors shadow-[4px_0_15px_rgba(0,0,0,0.3)]",
          isPrimary
            ? "bg-amber-400 shadow-[4px_0_15px_rgba(251,191,36,0.4)]"
            : "bg-primary shadow-[4px_0_15px_rgba(var(--primary),0.4)]"
        )}
      />

      <div className="flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-8">
          <div className="flex items-center justify-center w-8">{getRankBadge(request.id)}</div>
          <div className="flex items-center gap-6">
            <div className="h-12 w-12 rounded-2xl bg-black/40 flex items-center justify-center border border-white/5 group-hover:border-primary/50 transition-colors">
              <span className="font-black">{request.name[0]}</span>
            </div>
            <div>
              <h3 className="text-xl font-black italic uppercase tracking-tight">{request.name}</h3>
              <p className="text-xs text-white/40 font-bold uppercase tracking-widest">{request.leader}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold text-blue-400">
            {request.status}
          </span>

          <div className="flex items-center gap-2">
            {!isPrimary && (
              <>
                <button className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500 hover:text-white transition-all">
                  <Check size={16} />
                </button>
                <button className="p-2.5 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition-all">
                  <X size={16} />
                </button>
              </>
            )}

            <button
              data-request-id={request.id}
              onClick={onToggle}
              className={cn(
                "flex items-center gap-2 px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all",
                isExpanded
                  ? "bg-white text-black"
                  : "bg-white/5 text-white/40 hover:bg-white/10 hover:text-white"
              )}
            >
              <Edit3 size={14} />
              {isExpanded ? "Close" : "Edit Detail"}
            </button>
          </div>
          <ChevronDown
            className={cn("text-white/20 transition-transform duration-500", isExpanded && "rotate-180 text-primary")}
          />
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
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
                    <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em] mb-3">
                      Клубын Зорилго
                    </p>
                    <p className="text-sm text-white/70 leading-relaxed italic">{request.goal}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <DetailTile icon={<Clock size={14} />} label="Schedule" value={request.time} />
                    <DetailTile icon={<DoorOpen size={14} />} label="Room" value={request.room} />
                    <DetailTile icon={<Users2 size={14} />} label="Students" value={request.students} />
                    <DetailTile icon={<Calendar size={14} />} label="Recurrence" value={request.repeat} />
                  </div>
                </div>

                {isPrimary && (
                  <div className="flex flex-col justify-end gap-3">
                    <div className="flex gap-3">
                      <button className="flex-1 py-4 rounded-2xl bg-emerald-500 text-black font-black uppercase text-xs hover:bg-emerald-400 hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                        Approve Squad
                      </button>
                      <button className="flex-1 py-4 rounded-2xl bg-white/5 border border-white/10 text-red-400 font-black uppercase text-xs hover:bg-red-500/10 transition-all">
                        Reject
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
