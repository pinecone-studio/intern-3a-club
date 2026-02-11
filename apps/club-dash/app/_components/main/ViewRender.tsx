import { GraduationCap, Briefcase } from 'lucide-react';
import { AdminClubsView } from '../teacher/main/AdminClubView';

const AcademicView = () => (
  <div className="p-10">
    <GraduationCap className="h-12 w-12 mb-4" />
    <h2 className="text-3xl font-black uppercase italic">Академик Сургалт</h2>
  </div>
);

const CareerResources = () => (
  <div className="p-10">
    <Briefcase className="h-12 w-12 mb-4" />
    <h2 className="text-3xl font-black uppercase italic">Карьер Хөгжил</h2>
  </div>
);

const ActiveChallenges = () => (
  <div className="p-10 font-black italic text-4xl">ACTIVE CHALLENGES</div>
);

interface Props {
  activeView: string;
}

// 🔥 MAP pattern → complexity = 1
const viewMap: Record<string, JSX.Element> = {
  'Admin Clubs': <AdminClubsView />,
  Courses: <AcademicView />,
  Academic: <AcademicView />,
  Resources: <CareerResources />,
  Active: <ActiveChallenges />,
};

export const ViewRenderer = ({ activeView }: Props) => {
  return viewMap[activeView] ?? null;
};
