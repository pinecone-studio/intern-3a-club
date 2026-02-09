"use client"
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ShieldCheck, ChevronDown, Calendar, DoorOpen, 
  Users2, Clock, Edit3, Check, X 
} from 'lucide-react'
import { cn } from 'lib/utils'

export const AdminClubsView = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const requests = [
    { id: 1, name: "React ", leader: "Б.Бат", status: "Шинэ", time: "14:00", room: "301", students: "15/20", repeat: "Weekly", goal: "React framework ашиглан бодит төсөл дээр ажиллах." },
    { id: 2, name: "Java", leader: "Г.Тэмүүлэн", status: "Шинэ", time: "16:00", room: "305", students: "12/20", repeat: "Bi-weekly", goal: "Кибер аюулгүй байдлын үндсүүдийг судалж турших." },
    { id: 3, name: "Leet code", leader: "А.Сарнай", status: "Шинэ", time: "15:30", room: "Studio 1", students: "20/20", repeat: "Weekly", goal: "UI/UX дизайн болон Figma дээрх прототайп хийх." },
    { id: 4, name: "Interview ", leader: "Д.Дорж", status: "Шинэ", time: "10:00", room: "204", students: "10/15", repeat: "Monthly", goal: "Мэдээллийн сангийн зохиомж ба SQL хэл сурах." },
    { id: 5, name: "Green", leader: "Ж.Болд", status: "Шинэ", time: "12:00", room: "101", students: "8/10", repeat: "Weekly", goal: "Python хэлний анхан шатны мэдлэг олгох." },
  ]

  const getRankBadge = (id: number) => {
    switch(id) {
      case 1: return <div className="h-6 w-6 rounded-full bg-amber-400 flex items-center justify-center text-[10px] font-black text-black shadow-[0_0_15px_rgba(251,191,36,0.5)]">1</div>
      case 2: return <div className="h-6 w-6 rounded-full bg-slate-300 flex items-center justify-center text-[10px] font-black text-black shadow-[0_0_15px_rgba(203,213,225,0.5)]">2</div>
      case 3: return <div className="h-6 w-6 rounded-full bg-orange-400 flex items-center justify-center text-[10px] font-black text-black shadow-[0_0_15px_rgba(251,146,60,0.5)]">3</div>
      default: return <span className="text-white/20 font-bold text-xs ml-2">{id}</span>
    }
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-10 text-white max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-4xl font-black uppercase tracking-tighter italic flex items-center gap-3">
            <ShieldCheck className="h-10 w-10 text-primary" /> Admin Clubs
          </h2>
          <p className="text-white/50 mt-2 font-medium">Шинээр үүсгэх хүсэлтүүдийг хянах хэсэг.</p>
        </div>
        <div className="bg-primary/10 border border-primary/20 px-6 py-3 rounded-2xl">
          <span className="text-[10px] font-black uppercase tracking-widest text-primary">Нийт: {requests.length} хүсэлт</span>
        </div>
      </div>

      {/* List */}
      <div className="space-y-4">
        {requests.map((req) => {
          const isPrimary = req.id <= 3;
          const isExpanded = expandedId === req.id;

          return (
            <div 
              key={req.id} 
              className={cn(
                "group relative overflow-hidden rounded-[2rem] border transition-all duration-500",
                isExpanded ? "bg-white/10 border-white/20 shadow-2xl" : "bg-white/5 border-white/5 hover:border-white/10",
                isPrimary && !isExpanded && "border-amber-400/30 bg-amber-400/[0.02]"
              )}
            >
              {/* Indicator Line */}
              <div className={cn(
                "absolute left-0 top-0 bottom-0 w-1.5 transition-colors shadow-[4px_0_15px_rgba(0,0,0,0.3)]",
                isPrimary ? "bg-amber-400 shadow-[4px_0_15px_rgba(251,191,36,0.4)]" : "bg-primary shadow-[4px_0_15px_rgba(var(--primary),0.4)]"
              )} />

              {/* Main Row */}
              <div className="flex items-center justify-between px-8 py-6">
                <div className="flex items-center gap-8">
                  <div className="flex items-center justify-center w-8">
                    {getRankBadge(req.id)}
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="h-12 w-12 rounded-2xl bg-black/40 flex items-center justify-center border border-white/5 group-hover:border-primary/50 transition-colors">
                      <span className={cn("font-black" )}>
                        {req.name[0]}
                      </span>
                    </div>
                    <div>
                      <h3 className={cn("text-xl font-black italic uppercase tracking-tight")}>
                        {req.name}
                      </h3>
                      <p className="text-xs text-white/40 font-bold uppercase tracking-widest">{req.leader}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold text-blue-400">
                    {req.status}
                  </span>
                  
                  <div className="flex items-center gap-2">
                    {/* Primary биш бол Approve/Reject харагдана */}
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
                    
                    {/* Edit/Detail Button */}
                    <button 
                      onClick={() => setExpandedId(isExpanded ? null : req.id)}
                      className={cn(
                        "flex items-center gap-2 px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all",
                        isExpanded 
                          ? "bg-white text-black" 
                          : isPrimary 
                            ? "bg-white/5 text-white/40 hover:bg-white/10 hover:text-white"
                            : "bg-white/5 text-white/40 hover:bg-white/10 hover:text-white"
                      )}
                    >
                      <Edit3 size={14} />
                      {isExpanded ? "Close" : "Edit Detail"}
                    </button>
                  </div>
                  <ChevronDown className={cn("text-white/20 transition-transform duration-500", isExpanded && "rotate-180 text-primary")} />
                </div>
              </div>

              {/* Expanded Content */}
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
                            <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em] mb-3">Клубын Зорилго</p>
                            <p className="text-sm text-white/70 leading-relaxed italic">{req.goal}</p>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <DetailTile icon={<Clock size={14}/>} label="Schedule" value={req.time} />
                            <DetailTile icon={<DoorOpen size={14}/>} label="Room" value={req.room} />
                            <DetailTile icon={<Users2 size={14}/>} label="Students" value={req.students} />
                            <DetailTile icon={<Calendar size={14}/>} label="Recurrence" value={req.repeat} />
                          </div>
                        </div>

                        {/* Action Column for Primary (Inside Detail) */}
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
          )
        })}
      </div>
    </motion.div>
  )
}

const DetailTile = ({ icon, label, value }: any) => (
  <div className="bg-white/5 border border-white/5 rounded-2xl p-4 hover:bg-white/10 transition-colors">
    <div className="flex items-center gap-2 text-primary mb-1 opacity-60">
      {icon}
      <span className="text-[9px] font-black uppercase tracking-widest">{label}</span>
    </div>
    <p className="text-sm font-bold text-white pl-5">{value}</p>
  </div>
)