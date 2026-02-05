import { History } from "lucide-react"
import { cn } from "lib/utils"

export const RequestHistory = () => {
  const requests = [
    { id: "REQ-001", name: "React challenge", status: "pending", date: "2024.05.10" },
    { id: "REQ-002", name: "Cyber Security", status: "approved", date: "2024.04.15" },
  ];

  return (
    <section className="space-y-4">
      <h3 className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-white/40">
        <History size={16} /> Илгээсэн хүсэлтүүд
      </h3>
      <div className="space-y-3">
        {requests.map((req) => (
          <div key={req.id} className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all group/item">
            <div className="flex items-center gap-4">
              <div className={cn("h-2 w-2 rounded-full shadow-[0_0_8px]", 
                req.status === "approved" ? "bg-emerald-500 shadow-emerald-500" : "bg-amber-500 shadow-amber-500"
              )} />
              <div>
                <h5 className="text-sm font-bold text-white group-hover/item:text-primary transition-colors">{req.name}</h5>
                <p className="text-[9px] text-white/30 font-black uppercase tracking-tighter">{req.date} • {req.id}</p>
              </div>
            </div>
            <span className={cn("text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full",
              req.status === "approved" ? "bg-emerald-500/10 text-emerald-500" : "bg-amber-500/10 text-amber-500"
            )}>{req.status}</span>
          </div>
        ))}
      </div>
    </section>
  );
};