import { motion, AnimatePresence } from "framer-motion"
import { ShieldCheck, Calendar, Users, CheckCircle2, LogOut, Timer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { InstructorCard } from "./Instructor-Card"
import { Club } from "@/lib/type"
import { cn } from "lib/utils"

interface ClubDetailsProps {
  selectedClub: Club & { isEnrolled?: boolean };
  onEnroll: (id: number) => void;
  onLeave: (id: number) => void; // Гарах функц нэмэв
  isLocked: boolean; // Хүлээлгийн төлөв
  remainingTime: number; // Үлдэгдэл секунд
}

export const ClubDetails = ({ 
  selectedClub, 
  onEnroll, 
  onLeave, 
  isLocked, 
  remainingTime 
}: ClubDetailsProps) => {
  return (
    <div className="flex-1 space-y-6">
      <div className="relative min-h-[500px] rounded-3xl border border-border bg-card p-8 shadow-sm">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedClub.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-transparent"
          >
            {/* Header */}
            <div className="mb-8 flex items-start justify-between">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <span className="rounded bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase text-primary">
                    Premium Club
                  </span>
                </div>
                <h1 className="text-4xl font-black uppercase tracking-tighter text-foreground">
                  {selectedClub.name}
                </h1>
              </div>
              <ShieldCheck className="h-12 w-12 text-primary/20" />
            </div>

            {/* Goal Section */}
            <div className="mb-8 border-l-2 border-primary/30 pl-6">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">Зорилго</h4>
              <p className="text-lg italic text-muted-foreground leading-relaxed">
                "{selectedClub.description}"
              </p>
            </div>

            {/* Instructors Grid */}
            <div className="relative mb-8 overflow-hidden rounded-[2rem] bg-secondary/10 border border-white/5">
              <div className={cn(
                "grid divide-white/5 bg-background/20",
                selectedClub.instructors.length === 1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"
              )}>
                {selectedClub.instructors.map((ins, index) => {
                  const isThirdChild = selectedClub.instructors.length === 3 && index === 2;
                  return (
                    <div 
                      key={index} 
                      className={cn(
                        "border-white/5",
                        index === 1 && "md:border-l",
                        isThirdChild && "md:col-span-2 border-t"
                      )}
                    >
                      <InstructorCard 
                        instructor={ins} 
                        isMultiple={selectedClub.instructors.length > 1} 
                        isFullWidth={isThirdChild}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Schedule & Members */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border bg-secondary/30 p-5">
                <h4 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
                  <Calendar className="h-4 w-4 text-primary" /> Хичээлийн хуваарь
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between border-b border-border/50 pb-2">
                    <span className="text-sm text-muted-foreground">Долоо хоногт</span>
                    <span className="text-sm font-bold">{selectedClub.schedule}</span>
                  </div>
                  <div className="flex justify-between border-b border-border/50 pb-2">
                    <span className="text-sm text-muted-foreground">Үргэлжлэх цаг</span>
                    <span className="text-sm font-bold">{selectedClub.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Орох анги</span>
                    <span className="text-sm font-bold">{selectedClub.class}</span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border bg-secondary/30 p-5">
                <div className="mb-4 flex items-center justify-between pt-5">
                  <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
                    <Users className="h-4 w-4 text-primary" /> Одоо байгаа {selectedClub.currentMembers}
                  </h4>
                  <span className="text-xs font-black text-primary">
                    {Math.round((selectedClub.currentMembers/selectedClub.maxMembers)*100)}%
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-background/50">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(selectedClub.currentMembers / selectedClub.maxMembers) * 100}%` }}
                    className="h-full bg-primary" 
                  />
                </div>
                <p className="mt-3 text-[10px] text-muted-foreground text-center font-medium">
                  Нийт {selectedClub.maxMembers} суудлаас {selectedClub.maxMembers - selectedClub.currentMembers} үлдсэн
                </p>
              </div>
            </div>

            {/* Enrolled Students */}
         {/* Enrolled Students */}
<div className="mt-8">
   <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">Бүртгэгдсэн сурагчид</h4>
   <ScrollArea className="h-fit w-full rounded-xl border border-dashed p-4">
      <div className="flex flex-wrap gap-3">
        {selectedClub.enrolledStudents.map((name, index) => (
          <motion.div 
            initial={{ scale: 0 }} 
            animate={{ scale: 1 }}
            key={`${selectedClub.id}-${name}-${index}`} 
            className={cn(
              "flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-bold shadow-sm transition-all border",
             
              name === "Ochko" 
                ? "bg-emerald-500/10 border-emerald-500 text-emerald-400 shadow-emerald-500/20" 
                : "bg-secondary border-transparent text-foreground"
            )}
          >
            <div className={cn(
              "h-4 w-4 rounded-full flex items-center justify-center text-[8px]",
              name === "Ochko" ? "bg-emerald-500 text-white" : "bg-primary/20 text-primary"
            )}>
              ID
            </div>
            {name}
          </motion.div>
        ))}
      </div>
   </ScrollArea>
</div>

            {/* Action Buttons */}
            <div className="mt-8 space-y-4">
              {selectedClub.isEnrolled ? (
                // --- ГАРАХ ТОВЧ ---
                <Button 
                  size="lg"
                  variant="destructive"
                  onClick={() => onLeave(selectedClub.id)}
                  className="group w-full overflow-hidden py-8 text-xl font-black uppercase tracking-widest transition-all hover:scale-[1.01]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <LogOut className="h-6 w-6 transition-transform group-hover:-translate-x-1" />
                    Клубээс гарах
                  </span>
                </Button>
              ) : (
                // --- НЭГДЭХ ТОВЧ ---
                <div className="space-y-2">
               <Button 
  size="lg"
  onClick={() => onEnroll(selectedClub.id)}
  className={cn(
    "group relative w-full overflow-hidden py-8 text-xl font-black uppercase tracking-widest transition-all",
    // isLocked утгыг Boolean() болгож баталгаажуулснаар илүү "0" гарахаас сэргийлнэ
    Boolean(isLocked) 
      ? "bg-muted cursor-not-allowed text-muted-foreground grayscale" 
      : selectedClub.status === "Open" 
        ? "bg-primary hover:bg-primary/90 hover:scale-[1.01]" 
        : "cursor-not-allowed bg-muted text-muted-foreground"
  )}
  disabled={selectedClub.status === "Full" || Boolean(isLocked)}
>
  <span className="relative z-10 flex items-center gap-2">
    {/* Зөвхөн секунд байгаа үед л таймерыг харуулна */}
    {Boolean(isLocked) && remainingTime > 0 ? (
      <>
        <Timer className="h-6 w-6 animate-[spin_3s_linear_infinite]" />
        <span>
          {Math.floor(remainingTime / 60)}:{(remainingTime % 60).toString().padStart(2, '0')}
        </span>
        <span className="ml-1 text-sm font-bold">хүлээх</span>
      </>
    ) : (
      selectedClub.status === "Open" ? "Одоо нэгдэх" : "Суудал дүүрсэн"
    )}
  </span>
  
  {/* Гялалзах анимейшн - Зөвхөн идэвхтэй үед */}
  {!isLocked && selectedClub.status === "Open" && (
    <motion.div 
      initial={{ x: "-100%" }}
      whileHover={{ x: "100%" }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
    />
  )}
</Button>
                  
                  {isLocked && (
                    <p className="text-center text-[10px] font-bold uppercase tracking-tighter text-red-500 animate-pulse">
                      Та саяхан клубээс гарсан тул түр хүлээх шаардлагатай!
                    </p>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}