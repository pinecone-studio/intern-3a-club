import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { MockedResponse } from '@apollo/client/testing';
import { ClubsContent } from '../app/JoinClub/_components/ClubsContent';
import { GET_ALL_CLUBS, Data, ExtendedClub } from '../lib/type';

// 1. Child Components-ийг төрөлтэйгээр Mock хийх
// Ингэснээр "Element type is invalid" алдаа дахин гарахгүй
jest.mock('../app/JoinClub/_components/ClubList', () => ({
  ClubList: ({
    onSelect,
    clubs,
  }: {
    onSelect: (id: string) => void;
    clubs: ExtendedClub[];
  }) => (
    <div data-testid="club-list">
      {clubs.map((c) => (
        <button key={c.id} onClick={() => onSelect(c.id)}>
          {c.name}
        </button>
      ))}
    </div>
  ),
}));

jest.mock('../app/JoinClub/_components/ClubDetail', () => ({
  ClubDetail: ({
    onEnroll,
    onLeave,
    selectedClub,
    isLocked,
    remainingTime,
  }: any) => (
    <div data-testid="club-detail">
      <h2>{selectedClub?.name}</h2>
      <p>Status: {isLocked ? `Locked ${remainingTime}s` : 'Available'}</p>
      <button onClick={() => onEnroll(selectedClub?.id)}>Enroll Action</button>
      <button onClick={() => onLeave(selectedClub?.id)}>Leave Action</button>
    </div>
  ),
}));

// 2. Mock Data бэлдэх
const mockClubsData: MockedResponse<Data>[] = [
  {
    request: {
      query: GET_ALL_CLUBS,
    },
    result: {
      data: {
        getAllClubs: [
          {
            id: '1',
            name: 'Chess Club',
            description: 'Strategy and mind games',
            status: 'Open',
            teacherId: 'Teacher 1',
            type: 'Academic',
            minMember: 2,
            maxMember: 10,
            timetables: [],
          },
          {
            id: '2',
            name: 'Art Club',
            description: 'Creative painting',
            status: 'Open',
            teacherId: 'Teacher 2',
            type: 'Creative',
            minMember: 5,
            maxMember: 15,
            timetables: [],
          },
        ],
      },
    },
  },
];

describe('ClubsContent 100% Logic Coverage', () => {
  beforeEach(() => {
    jest.useFakeTimers(); // setInterval (Line 46)-ийг тестлэхэд хэрэгтэй
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('Loading төлөвийг шалгах (Line 92 coverage)', () => {
    render(
      <MockedProvider mocks={[]} addTypename={false}>
        <ClubsContent />
      </MockedProvider>
    );
    // loading үед null буцаадаг тул контент байхгүй байх ёстой
    expect(screen.queryByTestId('club-list')).not.toBeInTheDocument();
  });

  it('Error төлөвийг шалгах (Line 93 coverage)', async () => {
    const errorMock: MockedResponse[] = [
      {
        request: { query: GET_ALL_CLUBS },
        error: new Error('GraphQL Network Error'),
      },
    ];

    render(
      <MockedProvider mocks={errorMock} addTypename={false}>
        <ClubsContent />
      </MockedProvider>
    );

    const errorMsg = await screen.findByText(/GraphQL Network Error/i);
    expect(errorMsg).toBeInTheDocument();
    expect(errorMsg).toHaveClass('text-red-500');
  });

  it('Үндсэн логик болон useEffect-үүдийг шалгах (Lines 15-91 coverage)', async () => {
    render(
      <MockedProvider mocks={mockClubsData} addTypename={false}>
        <ClubsContent />
      </MockedProvider>
    );

    // 1. Data load болохыг хүлээх (useEffect Line 40)
    await waitFor(() => {
      expect(screen.getByTestId('club-list')).toBeInTheDocument();
    });

    // 2. Default-оор эхний клуб сонгогдсон эсэхийг шалгах (Line 44)
    expect(screen.getByText('Chess Club')).toBeInTheDocument();

    // 3. handleEnroll (Line 52) - Enroll товч дарах
    fireEvent.click(screen.getByText('Enroll Action'));

    // 4. handleLeave (Line 60) - Leave товч дарах (Энэ нь bannedUntil-ийг онооно)
    fireEvent.click(screen.getByText('Leave Action'));

    // 5. Timer logic (Line 46) - 1 секунд гүйлгэх
    jest.advanceTimersByTime(1000);

    // 6. handleSelect (Line 70) - Өөр клуб сонгох
    const artClubBtn = screen.getByText('Art Club');
    fireEvent.click(artClubBtn);

    await waitFor(() => {
      expect(
        screen.getByRole('heading', { name: /Art Club/i })
      ).toBeInTheDocument();
    });

    // 7. sortClubs (Line 15) болон mapClubsData (Line 21) логикууд
    // дээрх үйлдлүүдийн явцад автоматаар cover хийгдсэн байгаа.
  });

  it('Data хоосон ирэх үеийн useEffect-ийг шалгах (Line 36)', async () => {
    const emptyMock: MockedResponse<Data> = {
      request: { query: GET_ALL_CLUBS },
      result: { data: { getAllClubs: [] } },
    };

    render(
      <MockedProvider mocks={[emptyMock]} addTypename={false}>
        <ClubsContent />
      </MockedProvider>
    );

    // Хүлээх хугацааны дараа ч жагсаалт хоосон байх ёстой
    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(screen.queryByTestId('club-list')).not.toBeInTheDocument();
  });
});
