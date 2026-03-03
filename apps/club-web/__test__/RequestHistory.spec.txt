import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MockedProvider } from '@apollo/client/testing/react';
import { RequestHistory } from '../components/club-add/RequestHistory';
import { GET_ALL_CLUBS } from '../lib/type';

const mocks = [
    {
        request: {
            query: GET_ALL_CLUBS,
        },
        result: {
            data: {
                getAllClubs: [
                    {
                        id: '1',
                        name: 'Club 1',
                        status: 'approved',
                        description: 'Desc 1',
                        teacherId: 't1',
                        type: 'mentor',
                        minMember: 5,
                        maxMember: 15,
                        timetables: [],
                        __typename: 'Club'
                    },
                    {
                        id: '2',
                        name: 'Club 2',
                        status: 'pending',
                        description: 'Desc 2',
                        teacherId: 't2',
                        type: 'mentor',
                        minMember: 5,
                        maxMember: 15,
                        timetables: [],
                        __typename: 'Club'
                    },
                    {
                        id: '3',
                        name: 'Club 3',
                        status: undefined,
                        description: 'Desc 3',
                        teacherId: 't3',
                        type: 'mentor',
                        minMember: 5,
                        maxMember: 15,
                        timetables: [],
                        __typename: 'Club'
                    },
                ],
            },
        },
    },
];

describe('RequestHistory Component', () => {
    afterEach(cleanup);

    it('renders loading state initially', () => {
        render(
            <MockedProvider mocks={[]}>
                <RequestHistory />
            </MockedProvider>
        );
        expect(screen.getAllByRole('generic').some(el => el.className.includes('animate-pulse'))).toBeTruthy();
    });

    it('renders list of clubs with different statuses', async () => {
        render(
            <MockedProvider mocks={mocks}>
                <RequestHistory />
            </MockedProvider>
        );

        expect(await screen.findByText('Club 1')).toBeInTheDocument();
        expect(screen.getByText('Club 2')).toBeInTheDocument();
        expect(screen.getByText('Club 3')).toBeInTheDocument();

        // Check status text
        expect(screen.getByText('approved')).toBeInTheDocument();
        expect(screen.getByText('pending')).toBeInTheDocument();
        expect(screen.getByText('unknown')).toBeInTheDocument();
    });
});
