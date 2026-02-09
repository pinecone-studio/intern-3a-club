import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ClubCardProps } from "@/lib/type";
import { motion } from "framer-motion";
import { cn } from "lib/utils";

import { BookOpen, Clock, DoorOpen, CheckCircle2, AlertCircle } from "lucide-react";

export const ClubCard = ({ club, isSelected, onClick }: ClubCardProps) => {
  // ЗАСВАР: Boolean() эсвэл харьцуулах оператор ашиглан "0" дэлгэцэнд гарахаас сэргийлэв
const isBanned = !!club.bannedUntil && club.bannedUntil > Date.now();

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.02, x: 5 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => onClick(club.id)}
        className={cn(
          "relative w-full overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300",
          isBanned 
            ? "border-red-500/50 bg-red-500/10 shadow-lg shadow-red-500/10"
            : club.isEnrolled 
              ? "border-emerald-500/50 bg-emerald-500/10 shadow-lg shadow-emerald-500/10"
              : isSelected
                ? "border-primary bg-primary/5 shadow-xl shadow-primary/10 ring-1 ring-primary/20"
                : "border-white/10 bg-transparent hover:border-primary/40 hover:bg-white/10"
        )}
      >
        {/* Active Pill - isBanned-ийг Boolean болгосон тул энд "0" гарахгүй */}
        {(isSelected || club.isEnrolled || isBanned) && (
          <motion.div 
            layoutId="active-pill"
            className={cn(
              "absolute left-0 top-0 h-full w-1.5",
              isBanned ? "bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.5)]" :
              club.isEnrolled ? "bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]" : 
              "bg-primary shadow-[0_0_15px_rgba(var(--primary),0.5)]"
            )} 
          />
        )}
        
        <div className="mb-4 flex items-start justify-between">
          <div className="flex flex-col gap-1">
            <h3 className={cn(
              "max-w-[200px] text-lg font-bold leading-tight transition-colors",
              isBanned ? "text-red-400" :
              club.isEnrolled ? "text-emerald-400" : 
              isSelected ? "text-primary" : "text-white"
            )}>
              {club.name}
            </h3>
            
            {/* Текстэн мэдээллүүд */}
            {isBanned ? (
              <span className="flex items-center gap-1 text-[10px] font-bold text-red-500">
                <AlertCircle className="h-3 w-3" /> Түр хязгаарлагдсан
              </span>
            ) : club.isEnrolled ? (
              <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-500">
                <CheckCircle2 className="h-3 w-3" /> Бүртгэгдсэн
              </span>
            ) : null}
          </div>
          
          <span className={cn(
            "rounded-md px-2.5 py-1 text-[10px] font-black uppercase tracking-wider",
            isBanned ? "bg-red-600 text-white shadow-[0_0_10px_rgba(239,68,68,0.3)]" :
            club.isEnrolled || club.status === "Open" 
              ? "bg-emerald-500 text-white shadow-[0_0_10px_rgba(16,185,129,0.3)]" 
              : "bg-white/10 text-white/40"
          )}>
            {isBanned ? "Ban" : club.isEnrolled ? "Идэвхтэй" : club.status === "Open" ? "Нээлттэй" : "Дүүрсэн"}
          </span>
        </div>

        <div className="space-y-2.5">
          <div className="flex items-center gap-2 text-sm text-white/50">
            <Clock className={cn("h-4 w-4", isBanned ? "text-red-500/70" : club.isEnrolled ? "text-emerald-500/70" : "text-primary/70")} />
            <span className="font-medium">{club.schedule} • {club.time}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-white/50">
            <DoorOpen className={cn("h-4 w-4", isBanned ? "text-red-500/70" : club.isEnrolled ? "text-emerald-500/70" : "text-primary/70")} />
            <span className="font-medium">{club.class}-р өрөө</span>
          </div>
          {/* <div className="flex items-center gap-2 text-sm text-white/50">
            <BookOpen className={cn("h-4 w-4", isBanned ? "text-red-500/70" : club.isEnrolled ? "text-emerald-500/70" : "text-primary/70")} />
            <span className="truncate italic">{club.topic}</span>
          </div> */}
        </div>

        <div className="mt-4 flex -space-x-2">
          {club.instructors.map((ins, i) => (
            <Avatar key={i} className="h-6 w-6 border-2 border-[#0b2b5c] ring-1 ring-white/10">
              <AvatarImage src={ins.image} />
              <AvatarFallback className="text-[8px] bg-primary/20">{ins.name[0]?.toUpperCase()}</AvatarFallback>
            </Avatar>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={cn(
              "h-2 w-2 rounded-full animate-pulse",
              isBanned ? "bg-red-500" : club.isEnrolled ? "bg-emerald-500" : club.status === "Open" ? "bg-primary" : "bg-white/20"
            )} />
            <span className="text-xs font-bold text-white/80">
              {club.currentMembers}/{club.maxMembers} гишүүн
            </span>
          </div>
          <div className="h-1.5 w-24 overflow-hidden rounded-full bg-white/5">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${(club.currentMembers / club.maxMembers) * 100}%` }}
              className={cn(
                "h-full transition-all duration-500",
                isBanned ? "bg-red-500" : club.isEnrolled ? "bg-emerald-500" : club.status === "Open" ? "bg-primary" : "bg-white/20"
              )}
            />
          </div>
        </div>
      </motion.button>
    </div>
  );
};