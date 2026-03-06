import React from 'react';

interface DetailTileProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

export const DetailTile = ({ icon, label, value }: DetailTileProps) => (
  <div className="bg-secondary/40 border border-border rounded-2xl p-2 hover:bg-secondary/70 w-30 flex items-center">
    <div className="flex items-center gap-2 text-foreground/70 ">
      {icon}
      <span className="text-[7px] font-semibold uppercase tracking-widest">
        {label}:
      </span>
    </div>
    <p className="text-xs font-medium text-foreground pl-5">{value}</p>
  </div>
);
