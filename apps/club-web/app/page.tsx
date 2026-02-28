import React from 'react';
import { CreateClubCenter } from '../components/create-club/CreateClubCenter';

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="fixed inset-0 z-[-1] bg-[url('/pinebaatar.png')] bg-cover bg-center bg-no-repeat" />
      <CreateClubCenter />
    </div>
  );
};

export default Home;
