"use client"

import React, { useState } from "react"
import { 
  ChevronDown, 
  Home, 
  GraduationCap, 
  Trophy, 
  Briefcase, 
  User, 
  Users, 
  Settings, 
  LogOut, 


  ShieldAlert,
 
} from "lucide-react"

import { HiMiniUserGroup } from "react-icons/hi2"
import { cn } from "lib/utils";

/**
 * Sidebar-ийн хүлээн авах үзүүлэлтүүд
 */
interface SidebarProps {
  onViewChange: (label: string) => void;
  currentActive: string; // Энд Dashboard-аас дамжуулж буй нэртэй ижил болгов
}


interface NavItem {
  label: string
  icon: React.ReactNode
  badge?: number
  children?: { label: string }[]
}

const navItems: NavItem[] = [
  { label: "Home", icon: <Home className="h-5 w-5" /> },
  { 
    label: "Academic", 
    icon: <GraduationCap className="h-5 w-5" />,
    children: [
      { label: "Courses" },
      { label: "Grades" },
    ]
  },
  { 
    label: "Challenge", 
    icon: <Trophy className="h-5 w-5" />,
    badge: 5,
    children: [
      { label: "Active" },
      { label: "Completed" },
    ]
  },
  { 
    label: "Career Development", 
    icon: <Briefcase className="h-5 w-5" />,
    children: [
      { label: "Resources" },
      { label: "Opportunities" },
    ]
  },
  { 
    label: "Personal space", 
    icon: <User className="h-5 w-5" />,
    children: [
      { label: "Profile" },
      { label: "Settings" },
    ]
  },
  { 
    label: "Team", 
    icon: <Users className="h-5 w-5" />,
    children: [
      { label: "Members" },
      { label: "Projects" },
    ]
  },
  { 
    label: "Clubs", 
    icon: <HiMiniUserGroup className="h-5 w-5" />,
    children: [
      { label: "Create Club" },
      { label: "Join Club" },
    ]
  },
  { 
    label: "Admin Section", 
    icon: <ShieldAlert className="h-5 w-5 text-amber-400" />, 
    children: [
      { label: "Admin Clubs" }, // Dashboard дээрх case "Admin Clubs" хэсэгтэй яг ижил нэртэй байх ёстой
    //   { label: "User Management" },
    ]
  },
];

export function DashboardSidebar({ onViewChange, currentActive }: SidebarProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>(["Clubs", "Academic"])

  const toggleExpand = (label: string) => {
    setExpandedItems(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label)
        : [...prev, label]
    )
  }

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-[1440px] w-64 flex-col bg-sidebar border-r border-sidebar-border bg-[radial-gradient(circle_at_80%_15%,rgba(90,160,255,0.25),transparent_45%),radial-gradient(circle_at_15%_85%,rgba(120,255,200,0.18),transparent_55%),linear-gradient(135deg,#050c1f,#0b2b5c)] shadow-2xl">
      
      <div className="flex-1 overflow-y-auto px-4 py-6 scrollbar-hide">
     
        
        <ul className="space-y-1.5">
          {navItems.map((item) => (
            <li key={item.label} className="relative">
              {item.children ? (
                <div className="space-y-1">
                  <button
                    onClick={() => toggleExpand(item.label)}
                    className={cn(
                      "flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-bold transition-all duration-300",
                      expandedItems.includes(item.label) 
                        ? "bg-white/5 text-white" 
                        : "text-white/50 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    <span className="flex items-center gap-3">
                      <span className={cn(expandedItems.includes(item.label) ? "text-primary" : "text-inherit")}>
                        {item.icon}
                      </span>
                      {item.label}
                    </span>
                    <ChevronDown className={cn("h-4 w-4 transition-transform duration-500", expandedItems.includes(item.label) && "rotate-180")} />
                  </button>

                  <div className={cn(
                    "grid transition-all duration-500 ease-in-out overflow-hidden",
                    expandedItems.includes(item.label) ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}>
                    <ul className="overflow-hidden space-y-1 ml-4 border-l border-white/5 mt-1">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <button
                            onClick={() => onViewChange(child.label)}
                            className={cn(
                              "relative w-full text-left rounded-lg px-8 py-2.5 text-xs font-bold transition-all",
                              currentActive === child.label 
                                ? "text-primary translate-x-1" 
                                : "text-white/40 hover:text-white hover:translate-x-1"
                            )}
                          >
                            {currentActive === child.label && (
                              <span className="absolute left-4 top-1/2 -translate-y-1/2 h-1 w-1 rounded-full bg-primary shadow-[0_0_8px_rgba(var(--primary),1)]" />
                            )}
                            {child.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => onViewChange(item.label)}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold transition-all duration-300",
                    currentActive === item.label 
                      ? "bg-primary text-white shadow-lg shadow-primary/20" 
                      : "text-white/50 hover:bg-white/5 hover:text-white"
                  )}
                >
                  {item.icon}
                  {item.label}
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* --- SYSTEM ACTIONS SECTION --- */}
      <div className="mt-auto border-t border-white/5 p-4 bg-black/20 backdrop-blur-md">
       

        <ul className="space-y-1">
          <li>
            <button className="flex w-full items-center gap-3 rounded-lg px-4 py-2.5 text-xs font-bold text-white/50 hover:bg-white/5 hover:text-white transition-all">
              <Settings className="h-4 w-4" />
              Settings
            </button>
          </li>
          <li>
            <button className="flex w-full items-center gap-3 rounded-lg px-4 py-2.5 text-xs font-bold text-red-400 hover:bg-red-400/10 transition-all">
              <LogOut className="h-4 w-4" />
              Sign Out
            </button>
          </li>
        </ul>
      </div>
    </aside>
  )
}