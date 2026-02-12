import {
  Home,
  GraduationCap,
  Trophy,
  Briefcase,
  User,
  Users,
  ShieldAlert,
} from 'lucide-react';
import { HiMiniUserGroup } from 'react-icons/hi2';

interface NavItem {
  label: string;
  icon: React.ReactNode;
  badge?: number;
  children?: { label: string }[];
}

export const navItems: NavItem[] = [
  { label: 'Home', icon: <Home className="h-5 w-5" /> },
  {
    label: 'Academic',
    icon: <GraduationCap className="h-5 w-5" />,
    children: [{ label: 'Courses' }, { label: 'Grades' }],
  },
  {
    label: 'Challenge',
    icon: <Trophy className="h-5 w-5" />,
    badge: 5,
    children: [{ label: 'Active' }, { label: 'Completed' }],
  },
  {
    label: 'Career Development',
    icon: <Briefcase className="h-5 w-5" />,
    children: [{ label: 'Resources' }, { label: 'Opportunities' }],
  },
  {
    label: 'Personal space',
    icon: <User className="h-5 w-5" />,
    children: [{ label: 'Profile' }, { label: 'Settings' }],
  },
  {
    label: 'Team',
    icon: <Users className="h-5 w-5" />,
    children: [{ label: 'Members' }, { label: 'Projects' }],
  },
  {
    label: 'Clubs',
    icon: <HiMiniUserGroup className="h-5 w-5" />,
    children: [{ label: 'Create Club' }, { label: 'Join Club' }],
  },
  {
    label: 'Admin Section',
    icon: <ShieldAlert className="h-5 w-5 text-foreground/80" />,
    children: [
      { label: 'Admin Clubs' }, // Dashboard дээрх case "Admin Clubs" хэсэгтэй яг ижил нэртэй байх ёстой
      //   { label: "User Management" },
    ],
  },
];
