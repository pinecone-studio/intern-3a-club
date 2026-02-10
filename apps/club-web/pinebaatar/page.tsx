"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  GraduationCap, 
  Briefcase,

} from "lucide-react"
import { DashboardHeader } from "./_components/General-Header"
import { CreateClubCenter } from "./_components/Create-Club-View"
import { AdminClubsView } from "./_components/Admin-Club-View"
import { DashboardSidebar } from "./_components/Main-SiderBar"
import { ClubsContent } from "./_components/Clubs-Content"
const AcademicView = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-10 text-white">
    <GraduationCap className="h-12 w-12 text-primary mb-4" />
    <h2 className="text-3xl font-black uppercase tracking-tighter italic">Академик Сургалт</h2>
    {/* ... өмнөх код ... */}
  </motion.div>
)

const CareerResources = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-10 text-white">
    <Briefcase className="h-12 w-12 text-emerald-400 mb-4" />
    <h2 className="text-3xl font-black uppercase tracking-tighter italic">Карьер Хөгжил</h2>
    {/* ... өмнөх код ... */}
  </motion.div>
)

export default function Dashboard() {
  const [activeView, setActiveView] = useState<string>("Join Club")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // View солих функц - "Admin Clubs" нэмэгдсэн
  const renderContent = () => {
    switch (activeView) {
      case "Join Club": return <ClubsContent />
      case "Create Club": return <CreateClubCenter />
      case "Admin Clubs": return <AdminClubsView /> // <--- ШИНЭ
      case "Courses":
      case "Academic": return <AcademicView />
      case "Resources": return <CareerResources />
      case "Active": return <div className="p-10 text-white font-black italic text-4xl">ACTIVE CHALLENGES</div>
      default: return <ClubsContent />
    }
  }

  return (
    <div className="max-h-[1440px] mx-auto bg-[#050c1f] selection:bg-primary selection:text-white">
      {/* Background хэсэг хэвээрээ... */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(90,160,255,0.15),transparent_45%)]" />
      </div>

      <DashboardSidebar 
        currentActive={activeView} 
        onViewChange={(label) => setActiveView(label)} 
      />

      <div className="pl-64 relative z-10 flex flex-col min-h-screen">
        <DashboardHeader />
       
        <main className="flex-1 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeView}
              initial={{ opacity: 0, x: 10, filter: "blur(10px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -10, filter: "blur(10px)" }}
              transition={{ duration: 0.4, ease: "circOut" }}
              className="w-full h-full"
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}