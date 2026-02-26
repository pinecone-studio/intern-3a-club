import { GET_ALL_CLUBS, GET_ALL_TEACHERS } from '../lib/type';

export const commonMocks = [
    {
        request: {
            query: GET_ALL_CLUBS,
        },
        result: {
            data: {
                getAllClubs: [
                    {
                        id: '1',
                        name: 'Mock Club',
                        status: 'approved',
                        description: 'Mock Description',
                        teacherId: '1',
                        type: 'mentor',
                        minMember: 0,
                        maxMember: 20,
                        timetables: [],
                        __typename: 'Club'
                    }
                ],
            },
        },
    },
    {
        request: {
            query: GET_ALL_TEACHERS,
        },
        result: {
            data: {
                getAllTeachers: [
                    { id: '1', firstName: 'Teacher', lastName: 'One', profilePicture: '', __typename: 'Teacher' }
                ],
            },
        },
    },
];
