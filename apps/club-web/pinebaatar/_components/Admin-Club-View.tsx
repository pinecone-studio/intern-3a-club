"use client";
import { useCallback, useState } from "react";
import type { MouseEvent } from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { AdminClubRequestCard } from "./Admin-Club-Request-Card";
import { CLUB_REQUESTS } from "./Admin-Club-Data";
import type { ClubRequest } from "./Admin-Club-Types";

export const AdminClubsView = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const handleToggle = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    const id = Number(event.currentTarget.dataset.requestId);
    if (!Number.isFinite(id)) {
      return;
    }
    setExpandedId((prev) => (prev === id ? null : id));
  }, []);

  const renderRequest = (request: ClubRequest) => (
    <AdminClubRequestCard
      key={request.id}
      request={request}
      expandedId={expandedId}
      onToggle={handleToggle}
    />
  );

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-10 text-white max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-4xl font-black uppercase tracking-tighter italic flex items-center gap-3">
            <ShieldCheck className="h-10 w-10 text-primary" /> Admin Clubs
          </h2>
          <p className="text-white/50 mt-2 font-medium">Шинээр үүсгэх хүсэлтүүдийг хянах хэсэг.</p>
        </div>
        <div className="bg-primary/10 border border-primary/20 px-6 py-3 rounded-2xl">
          <span className="text-[10px] font-black uppercase tracking-widest text-primary">
            Нийт: {CLUB_REQUESTS.length} хүсэлт
          </span>
        </div>
      </div>

      <div className="space-y-4">{CLUB_REQUESTS.map(renderRequest)}</div>
    </motion.div>
  );
};
