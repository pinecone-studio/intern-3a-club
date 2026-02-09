import { MoveDownIcon } from "lucide-react";

export const SelectField = ({ label, icon, value, onChange, options }: any) => (
  <div className="space-y-2">
    <p className="text-[9px] font-black text-white/40 uppercase tracking-widest flex items-center gap-2">
      {icon} {label}
    </p>
    <div className="relative">
      <select 
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-primary/50 appearance-none cursor-pointer font-medium"
      >
        {options.map((opt: any) => (
          <option key={opt.v || opt} value={opt.v || opt} className="bg-[#050c1f]">
            {opt.l || opt}
          </option>
        ))}
      </select>
      <MoveDownIcon className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/20 pointer-events-none" />
    </div>
  </div>
)