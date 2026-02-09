'use client';

import { useQuery, useMutation } from '@apollo/client/react';
import { gql } from '@apollo/client';

export type Location = {
  id: string;
  name: string;
  description: string;
  photo: string;
};

export type GetLocationsData = {
  locations: Location[];
};

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

export default function ClubDashHomePage() {
  const { data, loading, error } = useQuery<GetLocationsData>(GET_LOCATIONS);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <div>Locations</div>
      {data?.locations.map((location) => (
        <div key={location.id}>
          <div>{location.name}</div>
          <div>{location.description}</div>
          <div className="w-100 h-100">{location.photo}</div>
        </div>
      ))}
    </div>
  );
}
