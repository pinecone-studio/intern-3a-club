import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { cn } from "lib/utils";

import { GraduationCap, Star } from "lucide-react";

interface InstructorProps {
  instructor: {
    name: string;
    image: string;
    role: string;
  };
  isMultiple: boolean;
  isFullWidth?: boolean; 
}

export const InstructorCard = ({ instructor, isMultiple, isFullWidth }: InstructorProps) => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={cn(
        "relative flex items-center gap-4 p-4 transition-all duration-300",
        isFullWidth ? "flex-row justify-start pl-12" : "flex-row",
        "h-full w-full"
      )}
    >
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, gray 1px, transparent 0)', backgroundSize: '24px 24px' }} />
      
      {/* Instructor Image */}
      <div className="relative shrink-0">
        <div className="absolute -inset-1.5 rounded-full bg-primary/20 blur-sm" />
        <Avatar className={cn(
          "border-[3px] border-background shadow-lg transition-transform duration-500 hover:scale-105",
          isMultiple && !isFullWidth ? "h-16 w-16" : "h-16 w-16"
        )}>
          <AvatarImage src={instructor.image} className="object-cover" />
          <AvatarFallback className="bg-primary/10 text-lg font-black text-primary">
            {instructor.name.split(" ").map(n => n[0]).join("")}
          </AvatarFallback>
        </Avatar>
        <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md border-2 border-background">
          <Star className="h-3 w-3 fill-current" />
        </div>
      </div>

      {/* Instructor Info */}
      <div className="relative z-10 flex-1 min-w-0">
        <div className="mb-0.5 flex items-center gap-1.5">
          <GraduationCap className="h-3 w-3 text-primary" />
          <span className="text-[8px] font-black uppercase tracking-[0.1em] text-muted-foreground truncate">
            {instructor.role}
          </span>
        </div>
        <h3 className={cn(
          "font-black italic uppercase tracking-tighter text-foreground leading-tight truncate mb-1",
          isMultiple && !isFullWidth ? "text-lg" : "text-2xl"
        )}>
          {instructor.name}
        </h3>
        <div className="flex items-center gap-2 scale-75 origin-left">
          <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
             <div className="h-1 w-1 rounded-full bg-emerald-500" />
             <span className="text-[8px] font-bold text-emerald-500 uppercase">PRO</span>
          </div>
          <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-primary/10 border border-primary/20">
             <div className="h-1 w-1 rounded-full bg-primary" />
             <span className="text-[8px] font-bold text-primary uppercase">MENTOR</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};