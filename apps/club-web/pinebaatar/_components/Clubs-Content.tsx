"use client"

import { useState, useMemo, useEffect } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"

import { clubs as initialClubs } from "@/lib/mockdata"
import { ClubDetails } from "./Club-Detail"
import { motion, AnimatePresence } from "framer-motion"
import { toast } from "sonner"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { ClubCard } from "./Club-Card"


export function ClubsContent() {
  const [allClubs, setAllClubs] = useState(
    initialClubs.map(club => ({ 
      ...club, 
      isEnrolled: false,
      bannedUntil: 0 
    }))
  )
  const [selectedClubId, setSelectedClubId] = useState<number>(1)
  const [now, setNow] = useState(Date.now())
  
  // AlertDialog-ийн төлөвүүд
  const [isLeaveDialogOpen, setIsLeaveDialogOpen] = useState(false)
  const [clubIdToLeave, setClubIdToLeave] = useState<number | null>(null)

  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(interval)
  }, [])

  const handleEnroll = (clubId: number) => {
    const targetClub = allClubs.find(c => c.id === clubId)
    
    if (targetClub && targetClub.bannedUntil > Date.now()) {
      const remainingSeconds = Math.ceil((targetClub.bannedUntil - Date.now()) / 1000)
      toast.error(`Түр хүлээгээрэй! ${remainingSeconds} секундын дараа дахин нэгдэх боломжтой.`)
      return
    }

    setAllClubs(prev =>
      prev.map(c =>
        c.id === clubId 
          ? { 
              ...c, 
              isEnrolled: true, 
              currentMembers: c.currentMembers + 1,
              enrolledStudents: ["Ochko", ...c.enrolledStudents]
            } 
          : c
      )
    )
    toast.success(`${targetClub?.name} клубт амжилттай бүртгэгдлээ!`)
  }

  // "Гарах" товч дарахад Dialog нээх
  const handleLeaveTrigger = (clubId: number) => {
    setClubIdToLeave(clubId)
    setIsLeaveDialogOpen(true)
  }

  // Dialog дээр "Тийм" гэж дарахад ажиллах үндсэн функц
  const confirmLeave = () => {
    if (clubIdToLeave === null) return

    setAllClubs(prev =>
      prev.map(c =>
        c.id === clubIdToLeave 
          ? { 
              ...c, 
              isEnrolled: false, 
              currentMembers: c.currentMembers - 1,
              enrolledStudents: c.enrolledStudents.filter(name => name !== "Ochko"),
              bannedUntil: Date.now() + 120000 
            } 
          : c
      )
    )
    
    toast.warning("Клубээс гарлаа. 2 минутын хязгаарлалт эхэллээ.")
    setIsLeaveDialogOpen(false)
    setClubIdToLeave(null)
  }

  const sortedClubs = useMemo(() => {
    return [...allClubs].sort((a, b) => {
      if (a.isEnrolled !== b.isEnrolled) return a.isEnrolled ? -1 : 1
      const aBanned = a.bannedUntil > now
      const bBanned = b.bannedUntil > now
      if (aBanned !== bBanned) return aBanned ? 1 : -1
      return 0
    })
  }, [allClubs, now])

  const selectedClub = sortedClubs.find((c) => c.id === selectedClubId) || sortedClubs[0]
  const clubRemainingTime = Math.max(0, Math.ceil(((selectedClub.bannedUntil || 0) - now) / 1000))

  useEffect(() => {
    allClubs.forEach(club => {
      if (club.bannedUntil > 0 && Math.abs(club.bannedUntil - now) < 1000) {
        toast.success(`${club.name} дахин нээлттэй боллоо!`, { icon: "🔓" })
      }
    })
  }, [now, allClubs])

  return (
    <div className="mx-auto h-screen space-y-8 p-6 bg-[radial-gradient(circle_at_80%_15%,rgba(90,160,255,0.25),transparent_45%),radial-gradient(circle_at_15%_85%,rgba(120,255,200,0.18),transparent_55%),linear-gradient(135deg,#050c1f,#0b2b5c)]">
      
      {/* HEADER */}
      <div className="flex items-end justify-between border-b border-white/10 pb-6">
        <div>
          <h2 className="text-3xl font-black uppercase tracking-tighter text-foreground">Клубууд</h2>
          <p className="mt-2 text-muted-foreground text-sm">Өөрийн ур чадвараа дараагийн түвшинд гарга</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-8 w-8 rounded-full border-2 border-background bg-muted shadow-sm" />
            ))}
          </div>
          <span className="text-xs font-bold text-primary uppercase tracking-widest">
            {allClubs.filter((c) => c.status === "Open").length} нээлттэй клуб
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        {/* LEFT SIDE */}
        <div className="w-full space-y-4 lg:w-[400px]">
          <ScrollArea className="h-[calc(100vh-250px)] pr-4">
            <div className="space-y-4">
              <AnimatePresence mode="popLayout">
                {sortedClubs.map((club) => (
                  <motion.div
                    key={club.id}
                    layout 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <ClubCard 
                      club={club}
                      isSelected={selectedClubId === club.id}
                      onClick={(id) => setSelectedClubId(id)}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </ScrollArea>
        </div>

        {/* RIGHT SIDE */}
        <ClubDetails 
          selectedClub={selectedClub} 
          onEnroll={handleEnroll} 
          onLeave={handleLeaveTrigger} // trigger-ийг дамжуулна
        isLocked={selectedClub.bannedUntil > now} 
          remainingTime={clubRemainingTime}
        />
      </div>

      {/* SMOOTH CONFIRMATION DIALOG */}
      <AlertDialog open={isLeaveDialogOpen} onOpenChange={setIsLeaveDialogOpen}>
        <AlertDialogContent className="rounded-[2rem] border-white/10 bg-[#0b2b5c]/95 backdrop-blur-2xl text-white shadow-2xl">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-2xl font-black uppercase tracking-tight">Та итгэлтэй байна уу?</AlertDialogTitle>
            <AlertDialogDescription className="text-white/60 font-medium">
              Хэрэв та клубээс гарвал <span className="text-red-400 font-bold">2 минутын</span> турш дахин нэгдэх боломжгүй болохыг анхаарна уу.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="mt-6 gap-3">
            <AlertDialogCancel className="rounded-2xl border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all">
              Болих
            </AlertDialogCancel>
            <AlertDialogAction 
              onClick={confirmLeave}
              className="rounded-2xl bg-red-500 hover:bg-red-600 text-white font-bold shadow-lg shadow-red-500/20 transition-all active:scale-95"
            >
              Тийм, гаръя
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}