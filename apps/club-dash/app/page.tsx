'use client';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react';
interface Club {
  id: string;
  name: string;
  description?: string;
  type: 'self' | 'mentor';
  status: 'pending' | 'approved' | 'declined';
}

interface GetClubsData {
  getClubs: Club[];
}
// Define the query to match your server schema
const GET_CLUBS = gql`
  query GetClubs {
    getClubs {
      id
      name
      description
      type
      status
    }
  }
`;

export default function ClubsList() {
  const { loading, error, data } = useQuery<GetClubsData>(GET_CLUBS);

  if (loading) return <p>Loading clubs...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Clubs</h1>
      <ul className="space-y-2">
        {data?.getClubs.map((club: Club) => (
          <li key={club.id} className="border p-3 rounded shadow-sm">
            <h2 className="font-semibold">{club.name}</h2>
            <p className="text-sm text-gray-600">{club.description}</p>
            <span className="text-xs bg-blue-100 px-2 py-1 rounded">
              {club.type} - {club.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}