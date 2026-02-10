import type { ReactNode } from "react";

type DetailTileProps = {
  icon: ReactNode;
  label: string;
  value: string;
};

export const DetailTile = ({ icon, label, value }: DetailTileProps) => (
  <div className="bg-white/5 border border-white/5 rounded-2xl p-4 hover:bg-white/10 transition-colors">
    <div className="flex items-center gap-2 text-primary mb-1 opacity-60">
      {icon}
      <span className="text-[9px] font-black uppercase tracking-widest">{label}</span>
    </div>
    <p className="text-sm font-bold text-white pl-5">{value}</p>
  </div>
);
