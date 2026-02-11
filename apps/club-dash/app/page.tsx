// 'use client';

// import { useQuery, useMutation } from '@apollo/client/react';
// import { gql } from '@apollo/client';

// export type Location = {
//   id: string;
//   name: string;
//   description: string;
//   photo: string;
// };

// export type GetLocationsData = {
//   locations: Location[];
// };

// const GET_LOCATIONS = gql`
//   query GetLocations {
//     locations {
//       id
//       name
//       description
//       photo
//     }
//   }
// `;

// export default function ClubDashHomePage() {
//   const { data, loading, error } = useQuery<GetLocationsData>(GET_LOCATIONS);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return (
//     <div>
//       <div>Locations</div>
//       {data?.locations.map((location) => (
//         <div key={location.id}>
//           <div>{location.name}</div>
//           <div>{location.description}</div>
//           <div className="w-100 h-100">{location.photo}</div>
//         </div>
//       ))}
//     </div>
//   );
// }

'use client';

import { useState, useEffect } from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';
import { DashboardHeader } from './_components/main/Header';
import { AdminClubsView } from './_components/teacher/main/AdminClubView';
import { DashboardSidebar } from './_components/main/Sidebar';

const AcademicView = () => (
  <div className="p-10 text-foreground">
    <GraduationCap className="h-12 w-12 text-foreground mb-4" />
    <h2 className="text-3xl font-black uppercase tracking-tighter italic">
      Академик Сургалт
    </h2>
  </div>
);

const CareerResources = () => (
  <div className="p-10 text-foreground">
    <Briefcase className="h-12 w-12 text-foreground mb-4" />
    <h2 className="text-3xl font-black uppercase tracking-tighter italic">
      Карьер Хөгжил
    </h2>
  </div>
);

export default function Dashboard() {
  const [activeView, setActiveView] = useState<string>('Join Club');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const renderContent = () => {
    switch (activeView) {
      case 'Admin Clubs':
        return <AdminClubsView />;
      case 'Courses':
      case 'Academic':
        return <AcademicView />;
      case 'Resources':
        return <CareerResources />;
      case 'Active':
        return (
          <div className="p-10 text-foreground font-black italic text-4xl">
            ACTIVE CHALLENGES
          </div>
        );
    }
  };

  return (
    <div className="max-h-360 mx-auto bg-background app-background selection:bg-foreground selection:text-background">
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" />

      <DashboardSidebar
        currentActive={activeView}
        onViewChange={(label) => setActiveView(label)}
      />

      <div className="pl-64 relative z-10 flex flex-col min-h-screen">
        <DashboardHeader />

        <main className="flex-1 relative overflow-hidden">
          <div key={activeView} className="w-full h-full">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}
