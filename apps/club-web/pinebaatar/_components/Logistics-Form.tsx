"use client"

import React from 'react'
import { DoorOpen, Clock, Timer, UserPlus2, RotateCcw } from 'lucide-react'

import { cn } from 'lib/utils';
import { SelectField } from './Calendar-Select-Field';

interface LogisticsFormProps {
  formData: any;
  setFormData: (data: any) => void;
  onRepeatChange: (val: string) => void;
}

export const LogisticsForm = ({ formData, setFormData, onRepeatChange }: LogisticsFormProps) => {
  return (
    <div className="flex flex-col justify-center space-y-6 lg:border-l border-white/5 lg:pl-10">
      {/* Давтамж сонгох хэсэг - Одоо 2 долоо хоног тутам гэсэн сонголттой */}
      <SelectField 
        label="Давтамж" 
        icon={<RotateCcw size={12}/>} 
        value={formData.repeat} 
        onChange={(val: any) => { 
          setFormData({...formData, repeat: val}); 
          onRepeatChange(val); 
        }}
        options={[
          { l: "Зөвхөн сонгосон өдрүүдэд", v: "none" }, 
          { l: "Долоо хоног бүр", v: "weekly" }, 
          { l: "2 долоо хоног тутам", v: "biweekly" }, // Энэ хэсгийг нэмлээ
          { l: "Сар бүр", v: "monthly" }
        ]}
      />

      <div className="grid grid-cols-2 gap-4">
        <SelectField 
          label="Орох Анги" 
          icon={<DoorOpen size={12}/>} 
          value={formData.room} 
          onChange={(v: any) => setFormData({...formData, room: v})} 
          options={["301", "302", "303"]} 
        />
        <SelectField 
          label="Эхлэх цаг" 
          icon={<Clock size={12}/>} 
          value={formData.time} 
          onChange={(v: any) => setFormData({...formData, time: v})} 
          options={["13:00", "14:00", "15:00", "16:00"]} 
        />
      </div>

      {/* Үргэлжлэх хугацаа - Энийг бас гээсэн байж магадгүй тул нэмлээ */}
      <SelectField 
        label="Үргэлжлэх" 
        icon={<Timer size={12}/>} 
        value={formData.duration} 
        onChange={(v: any) => setFormData({...formData, duration: v})} 
        options={[
          { l: "1:00 цаг", v: "1:00" }, 
          { l: "1:30 цаг", v: "1:30" }, 
          { l: "2:00 цаг", v: "2:00" }
        ]} 
      />

      <div className="space-y-2">
        <p className={cn(
          "text-[9px] font-black uppercase tracking-widest flex items-center gap-2 transition-colors",
          Number(formData.maxStudents) > 25 ? "text-red-500" : "text-white/40"
        )}>
          <UserPlus2 size={12} /> Сурагчид (Макс 25)
        </p>
        <input 
          type="number" 
          value={formData.maxStudents} 
          onChange={(e) => setFormData({...formData, maxStudents: e.target.value})}
          className={cn(
            "w-full bg-white/5 border rounded-xl px-4 py-3 text-sm text-white focus:border-primary/50 outline-none transition-all font-mono",
            Number(formData.maxStudents) > 20 ? "border-red-500" : "border-white/10"
          )}
          placeholder="15"
        />
      </div>
    </div>
  )
}