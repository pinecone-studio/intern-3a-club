import { Clock, Check } from "lucide-react"

export const SystemTip = () => (
  <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 relative overflow-hidden group">
    <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
       <Clock size={120} />
    </div>
    <div className="flex gap-4 relative z-10">
      <div className="h-10 w-10 rounded-xl bg-blue-500/20 flex items-center justify-center shrink-0">
        <Check className="h-5 w-5 text-blue-400" />
      </div>
      <div className="space-y-2">
        <p className="text-xs text-white/70 leading-relaxed font-bold uppercase tracking-widest">Хуваарь баталгаажуулалт</p>
        <p className="text-[11px] text-white/40 leading-relaxed italic">Систем таны сонгосон олон өдрүүдийн давхцлыг шалгаж байна.</p>
      </div>
    </div>
  </div>
);