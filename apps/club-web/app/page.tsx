'use client';

import { useQuery, useMutation } from '@apollo/client/react';
import { gql } from '@apollo/client';

export type Club = {
  id: string;
  name: string;
  minMember: number;
  maxMember: number;
  status: string;
};

export type GetClubsData = {
  clubs: Club[];
};

export type Location = {
  id: string;
  name: string;
  description: string;
  photo: string;
};

export type GetLocationsData = {
  locations: Location[];
};
// const GET_CLUBS = gql`
//   query GetClubs {
//     clubs {
//       id
//       name
//       minMember
//       maxMember
//       status
//     }
//   }
// `;

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

export default function HomePage() {
  // const { data, loading, error } = useQuery<GetClubsData>(GET_CLUBS);
  const { data, loading, error } = useQuery<GetLocationsData>(GET_LOCATIONS);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="w-full h-screen">
      <div>Locations</div>
      {data?.locations.map((location) => (
        <div key={location.id}>
          <div>{location.name}</div>
          <div>{location.description}</div>
          <div className="w-100 h-100">{location.photo}</div>
          <div></div>
        </div>
      ))}
      {/* <div>Clubs</div>
      {data?.clubs.map((club) => (
        <div key={club.id}>
          <div>{club.name}</div>
          <div>{club.minMember}</div>
          <div>{club.maxMember}</div>
          <div>{club.status}</div>
        </div>
      ))} */}
    </div>
  );
}
