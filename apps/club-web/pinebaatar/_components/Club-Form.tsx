"use client"

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Globe2, UserCheck, MoveDownIcon
} from 'lucide-react'
import { Button } from "@/components/ui/button"
import { LogisticsSection } from './Calendar-club'



interface ClubFormProps {
  formData: any;
  setFormData: (data: any) => void;
  handleSubmit: () => void;
  // ЗАСВАР: selectedDate (нэг) биш selectedDates (массив) болгох
  selectedDates: Date[]; 
  setSelectedDates: (dates: Date[]) => void;
  currentMonth: Date;
  handleMonthChange: (offset: number) => void;
  renderCalendarDays: () => React.ReactNode;
}

export const ClubForm = ({
  formData,
  setFormData,
  handleSubmit,
  selectedDates, // ЗАСВАР
  setSelectedDates, // ЗАСВАР
  currentMonth,
  handleMonthChange,
  renderCalendarDays
}: ClubFormProps) => {

  return (
    <div className="lg:col-span-7 space-y-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="rounded-[3rem] border border-white/10 bg-white/5 p-10 backdrop-blur-3xl relative overflow-hidden group shadow-2xl"
      >
        <div className="relative z-10 space-y-10">

          {/* Basic Info Section */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-primary flex items-center gap-2">
                  <Globe2 size={12} /> Клубын нэр
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:ring-2 focus:ring-primary/50 transition-all font-bold italic"
                  placeholder="Wizards Club..."
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-primary flex items-center gap-2">
                  <UserCheck size={12} /> Хариуцах хүн
                </label>
                <div className="relative">
                  <select
                    value={formData.teacher}
                    onChange={(e) => setFormData({ ...formData, teacher: e.target.value })}
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-[#050c1f]">Сонгох...</option>
                    <option value="bat" className="bg-[#050c1f]">Б.Бат (Ph.D)</option>
                    <option value="saraa" className="bg-[#050c1f]">Г.Сараа (Master)</option>
                    <option value="student" className="bg-[#050c1f]">Сурагч</option>
                    <option value="free" className="bg-[#050c1f]">Сул байгаа багш</option>
                  </select>
                  <MoveDownIcon className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/20 pointer-events-none" />
                </div>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {formData.teacher === "student" && (
                <motion.div
                  layout
                  initial={{ opacity: 0, height: 0, scale: 0.95, y: -10 }}
                  animate={{ 
                    opacity: 1, 
                    height: "auto", 
                    scale: 1, 
                    y: 0,
                    transition: {
                      height: { type: "spring", stiffness: 100, damping: 15 },
                      opacity: { duration: 0.2, delay: 0.1 }
                    }
                  }}
                  exit={{ 
                    opacity: 0, 
                    height: 0, 
                    scale: 0.95, 
                    y: -10,
                    transition: { height: { duration: 0.3 }, opacity: { duration: 0.1 } }
                  }}
                  className="space-y-3 overflow-hidden origin-top"
                >
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-primary flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-primary animate-pulse" />
                    Сурагчийн и-мэйл хаяг
                  </label>
                  <div className="relative group">
                    <input
                      type="email"
                      value={formData.studentEmail}
                      onChange={(e) => setFormData({ ...formData, studentEmail: e.target.value })}
                      className="w-full bg-primary/5 border border-primary/20 rounded-2xl px-6 py-4 text-white outline-none focus:ring-2 focus:ring-primary/50 focus:bg-primary/10 transition-all duration-300 placeholder:text-white/20"
                      placeholder="student@example.com"
                    />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] w-0 bg-primary group-focus-within:w-[90%] transition-all duration-500 shadow-[0_0_10px_rgba(var(--primary),0.8)]" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Goal Section */}
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-primary italic">Клубын зорилго</label>
            <textarea
              rows={2}
              value={formData.goal}
              onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
              className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none font-medium"
              placeholder="Энэхүү клубын үндсэн зорилгыг тодорхойлно уу..."
            />
          </div>

          {/* CALENDAR & LOGISTICS SECTION */}
          <LogisticsSection 
            formData={formData}
            setFormData={setFormData}
            selectedDates={selectedDates} // ЗАСВАР: Массиваар дамжуулна
            setSelectedDates={setSelectedDates} // ЗАСВАР: Setter дамжуулна
            currentMonth={currentMonth}
            handleMonthChange={handleMonthChange}
            renderCalendarDays={renderCalendarDays}
          />

          {/* Action Button */}
          <div className="flex gap-4 pt-4">
            <Button 
              onClick={handleSubmit}
              className="flex-1 h-20 rounded-3xl bg-primary text-xl font-black uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-primary/20 transition-all duration-300"
            >
              Хүсэлт илгээх
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}