import { Clock, Check } from 'lucide-react';

export const SystemTip = () => (
  <div className="p-8 rounded-[2.5rem] bg-black/30 border border-white/5 relative overflow-hidden group backdrop-blur-3xl">
    <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
      <Clock size={120} />
    </div>
    <div className="flex gap-4 relative z-10">
      <div className="h-10 w-10 rounded-xl bg-emerald-500/15 flex items-center justify-center shrink-0">
        <Check className="h-5 w-5 text-emerald-400" />
      </div>
      <div className="space-y-2">
        <p className="text-[10px] text-white/60 leading-relaxed font-bold uppercase tracking-[0.25em]">
          Хуваарь баталгаажуулалт
        </p>
        <p className="text-[11px] text-white/40 leading-relaxed italic">
          Систем таны сонгосон олон өдрүүдийн давхцлыг шалгаж байна.
        </p>
      </div>
    </div>
  </div>
);
