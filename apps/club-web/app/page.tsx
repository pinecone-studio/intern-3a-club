import React from 'react';
import { CreateClubCenter } from '../components/create-club/CreateClubCenter';

const Home = () => {
  return (
    <div className="min-h-screen bg-[url('/pinebaatar.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center">
      <CreateClubCenter />
    </div>
  );
};

export default Home;
