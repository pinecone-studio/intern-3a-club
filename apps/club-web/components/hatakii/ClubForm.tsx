'use client';

import React, { ChangeEvent } from 'react';
import { Globe2, UserCheck, MoveDownIcon } from 'lucide-react';
import { LogisticsSection } from './LogisticsSection';
import { ClubFormProps } from './types';

export const ClubForm = ({
  formData,
  setFormData,
  handleSubmit,
  selectedDates,
  setSelectedDates,
  currentMonth,
  handleMonthChange,
  renderCalendarDays,
}: ClubFormProps) => {
  // 1. Бүх төрлийн оролтыг (input, select, textarea) зохицуулах нэгдсэн функц
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="lg:col-span-7 space-y-8">
      <div className="rounded-[3rem] border border-white/10 bg-white/5 p-10 backdrop-blur-3xl relative overflow-hidden group shadow-2xl">
        <div className="relative z-10 space-y-10">
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Клубын нэр */}
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-primary flex items-center gap-2">
                  <Globe2 size={12} /> Клубын нэр
                </label>
                <input
                  type="text"
                  name="name" // name заавал өгөх ёстой
                  value={formData.name}
                  onChange={handleInputChange} // Функцийн нэрийг дамжуулна
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:ring-2 focus:ring-primary/50 transition-all font-bold italic"
                  placeholder="Wizards Club..."
                />
              </div>

              {/* Хариуцах хүн */}
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-primary flex items-center gap-2">
                  <UserCheck size={12} /> Хариуцах хүн
                </label>
                <div className="relative">
                  <select
                    name="teacher" // name заавал өгөх ёстой
                    value={formData.teacher}
                    onChange={handleInputChange}
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-[#050c1f]">
                      Сонгох...
                    </option>
                    <option value="bat" className="bg-[#050c1f]">
                      Б.Бат (Ph.D)
                    </option>
                    <option value="saraa" className="bg-[#050c1f]">
                      Г.Сараа (Master)
                    </option>
                    <option value="student" className="bg-[#050c1f]">
                      Сурагч
                    </option>
                    <option value="free" className="bg-[#050c1f]">
                      Сул байгаа багш
                    </option>
                  </select>
                  <MoveDownIcon className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/20 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Сурагчийн и-мэйл */}
            {formData.teacher === 'student' && (
              <div className="space-y-3 overflow-hidden origin-top">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-primary flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-primary animate-pulse" />
                  Сурагчийн и-мэйл хаяг
                </label>
                <div className="relative group">
                  <input
                    type="email"
                    name="studentEmail" // name заавал өгөх ёстой
                    value={formData.studentEmail}
                    onChange={handleInputChange}
                    className="w-full bg-primary/5 border border-primary/20 rounded-2xl px-6 py-4 text-white outline-none focus:ring-2 focus:ring-primary/50 focus:bg-primary/10 transition-all duration-300 placeholder:text-white/20"
                    placeholder="student@example.com"
                  />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] w-0 bg-primary group-focus-within:w-[90%] transition-all duration-500 shadow-[0_0_10px_rgba(var(--primary),0.8)]" />
                </div>
              </div>
            )}
          </div>

          {/* Клубын зорилго */}
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-primary italic">
              Клубын зорилго
            </label>
            <textarea
              rows={2}
              name="goal" // name заавал өгөх ёстой
              value={formData.goal}
              onChange={handleInputChange}
              className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none font-medium"
              placeholder="Энэхүү клубын үндсэн зорилгыг тодорхойлно уу..."
            />
          </div>

          <LogisticsSection
            formData={formData}
            setFormData={setFormData}
            selectedDates={selectedDates}
            setSelectedDates={setSelectedDates}
            currentMonth={currentMonth}
            handleMonthChange={handleMonthChange}
            renderCalendarDays={renderCalendarDays}
          />

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={handleSubmit}
              className="flex-1 h-20 rounded-3xl bg-primary text-xl font-black uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-primary/20 transition-all duration-300"
            >
              Хүсэлт илгээх
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
