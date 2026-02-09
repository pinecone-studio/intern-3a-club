"use client"

import { useState } from "react"
import { cn } from "lib/utils" // cn-ийг энд ашиглах тул импортлоно
import { motion } from "framer-motion"
import { ClubForm } from "./Club-Form"
import { HeaderSection } from "./Create-Club-Header";
import { MyClubsList } from "./Personal-Clubs";
import { RequestHistory } from "./Request-History";
import { SystemTip } from "./System-Tip";

export const CreateClubCenter = () => {
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [formData, setFormData] = useState<any>({
    name: "", goal: "", teacher: "", time: "13:00",
    duration: "1:30", studentEmail: "", room: "301",
    maxStudents: "", repeat: "none"
  });

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // --- LOGIC FUNCTIONS ---
  const handleMonthChange = (offset: number) => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + offset, 1));
  };

  const toggleDate = (date: Date) => {
    const exists = selectedDates.find(d => d.toDateString() === date.toDateString());
    if (exists) {
      setSelectedDates(selectedDates.filter(d => d.toDateString() !== date.toDateString()));
    } else {
      setSelectedDates([...selectedDates, date].sort((a, b) => a.getTime() - b.getTime()));
    }
  };

  // ЭНЭ ХЭСГИЙГ НЭМЭЭРЭЙ:
 const renderCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    
    // Сард хэдэн өдөр байгааг тооцоолох
    const daysInMonthCount = new Date(year, month + 1, 0).getDate();
    // Сарын эхний өдөр аль гарагаас эхэлж байгааг тооцоолох
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const days = [];

    // 1. Сарын эхний өдөр хүртэлх хоосон нүднүүд
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-10 w-10" />);
    }

    // 2. Сарын өдрүүдийг зурах
    for (let d = 1; d <= daysInMonthCount; d++) {
      const date = new Date(year, month, d);
      const isPast = date < today;
      const isSelected = selectedDates.some(sd => sd.toDateString() === date.toDateString());
      const isToday = today.toDateString() === date.toDateString();

      days.push(
        <button
          key={d}
          type="button"
          disabled={isPast}
          onClick={() => toggleDate(date)}
          className={cn(
            "h-10 w-10 rounded-xl text-xs font-bold transition-all relative flex items-center justify-center",
            isPast ? "opacity-10 cursor-not-allowed" : "hover:bg-primary/20 text-white/80",
            isSelected ? "bg-primary text-white shadow-[0_0_15px_rgba(var(--primary),0.5)]" : "bg-white/5",
            isToday && !isSelected && "border border-primary text-primary"
          )}
        >
          {d}
          {isSelected && (
            <motion.div 
              layoutId="calendar-dot"
              className="absolute -top-1 -right-1 h-2 w-2 bg-emerald-500 rounded-full border-2 border-[#0b2b5c]" 
            />
          )}
        </button>
      );
    }
    return days;
  };
  return (
    <div className="max-w-[1400px] mx-auto p-6 lg:p-10 relative z-10">
      <HeaderSection title="Клуб Нээх" subtitle="Шинэ клуб нээх хүсэлт болон хуваарь илгээх." />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <ClubForm 
          formData={formData}
          setFormData={setFormData}
          selectedDates={selectedDates}
          setSelectedDates={setSelectedDates}
          currentMonth={currentMonth}
          handleMonthChange={handleMonthChange}
          renderCalendarDays={renderCalendarDays} // Одоо ажиллана
          handleSubmit={() => console.log(formData)}
        />

        <div className="lg:col-span-5 space-y-8">
          <MyClubsList />
          <RequestHistory />
          <SystemTip />
        </div>
      </div>
    </div>
  );
};