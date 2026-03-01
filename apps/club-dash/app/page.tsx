'use client';

import { useState } from 'react';
import { DashboardHeader } from './_components/main/Header';
import { DashboardSidebar } from './_components/main/sidebar/DashSidebar';
import { ViewRender } from './_components/main/ViewRender';
import { useAuth, useUser } from '@clerk/nextjs';

export default function Dashboard() {
  const [activeView, setActiveView] = useState<string>('Join Club');
  const { user } = useUser();
  const { getToken } = useAuth();

  const getClerkToken = async () => {
    const token = await getToken();
    console.log({ token });
  };
  getClerkToken();
  console.log({ user });

  const handleViewChange = (label: string) => {
    setActiveView(label);
  };

  return (
    <div className="max-h-360 mx-auto bg-background">
      <DashboardSidebar
        currentActive={activeView}
        onViewChange={handleViewChange}
      />

      <div className="pl-64 flex flex-col min-h-screen">
        <DashboardHeader />

        <main className="flex-1">
          <ViewRender activeView={activeView} />
        </main>
      </div>
    </div>
  );
}
