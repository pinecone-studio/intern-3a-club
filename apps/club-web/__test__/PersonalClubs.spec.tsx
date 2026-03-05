import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MockedProvider } from '@apollo/client/testing/react';
import gql from 'graphql-tag';
import { MyClubsList } from '../components/club-add/PersonalClubs';
import { GET_ALL_TEACHERS } from '../lib/club-query';

jest.mock('@clerk/nextjs', () => ({
  useAuth: jest.fn(),
}));

jest.mock('framer-motion', () => ({
  motion: {
    button: ({ children, ...props }: React.ComponentProps<'button'>) => (
      <button {...props}>{children}</button>
    ),
  },
}));

const { useAuth } = jest.requireMock('@clerk/nextjs') as {
  useAuth: jest.Mock;
};

const GET_MY_CLUBS_DETAIL_FOR_TEST = gql`
  query GetAllClubsByCreatorId {
    getAllClubsByCreatorId {
      id
      name
      description
      teacherId
      type
      status
      preferredTeachers
      minMember
      maxMember
      frequency
      clubTerm
      timetables {
        id
        date
        room
        clubStartTime
        duration
      }
      members {
        id
        studentId
      }
    }
  }
`;

describe('MyClubsList', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    useAuth.mockReturnValue({
      isLoaded: true,
      userId: 'user-1',
      getToken: jest.fn().mockResolvedValue('token-1'),
    });
  });

  it('expands only clicked club and shows teacher names', async () => {
    const mocks = [
      {
        request: { query: GET_MY_CLUBS_DETAIL_FOR_TEST },
        result: {
          data: {
            getAllClubsByCreatorId: [
              {
                id: 'a1',
                name: 'Math Club',
                description: 'Math desc',
                teacherId: 't1',
                type: 'mentor',
                status: 'approved',
                preferredTeachers: ['t2'],
                minMember: 5,
                maxMember: 20,
                frequency: 'WEEKLY',
                clubTerm: '8',
                timetables: [
                  {
                    id: 'tt1',
                    date: '2026-03-10',
                    room: 'A-101',
                    clubStartTime: '10:00',
                    duration: 60,
                  },
                ],
                members: [{ id: 'm1', studentId: 's1' }],
              },
              {
                id: 'a2',
                name: 'Physics Club',
                description: 'Physics desc',
                teacherId: 't2',
                type: 'mentor',
                status: 'approved',
                preferredTeachers: ['t1'],
                minMember: 3,
                maxMember: 15,
                frequency: 'ONCE',
                clubTerm: '0',
                timetables: [],
                members: [],
              },
              {
                id: 'p1',
                name: 'Pending Club',
                description: 'should not render in approved list',
                teacherId: 't2',
                type: 'mentor',
                status: 'pending',
                preferredTeachers: [],
                minMember: 1,
                maxMember: 10,
                frequency: 'ONCE',
                clubTerm: '0',
                timetables: [],
                members: [],
              },
            ],
          },
        },
      },
      {
        request: { query: GET_ALL_TEACHERS },
        result: {
          data: {
            getAllTeachers: [
              {
                id: 't1',
                firstName: 'Bat',
                lastName: 'Erdene',
                profilePicture: '',
              },
              {
                id: 't2',
                firstName: 'Saraa',
                lastName: 'Bold',
                profilePicture: '',
              },
            ],
          },
        },
      },
    ];

    render(
      <MockedProvider mocks={mocks}>
        <MyClubsList />
      </MockedProvider>
    );

    expect(await screen.findByText('Math Club')).toBeInTheDocument();
    expect(screen.getByText('Physics Club')).toBeInTheDocument();
    expect(screen.queryByText('Pending Club')).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /Math Club/i }));

    expect(await screen.findByText('Math desc')).toBeInTheDocument();
    expect(screen.getByText('Bat Erdene')).toBeInTheDocument();
    expect(screen.getByText('Saraa Bold')).toBeInTheDocument();

    expect(screen.queryByText('Physics desc')).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /Physics Club/i }));

    expect(await screen.findByText('Physics desc')).toBeInTheDocument();
    expect(screen.queryByText('Math desc')).not.toBeInTheDocument();
  });
});
