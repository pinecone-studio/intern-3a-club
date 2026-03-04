import React from 'react';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing/react';
import JoinClubPage from '../../app/JoinClub/page';
import {
  GET_ALL_APPROVED_CLUBS,
  GET_ALL_TEACHERS,
} from '../../lib/club-query';
import { MockedResponse } from '@apollo/client/testing';


jest.mock('@clerk/nextjs', () => ({
  useAuth: () => ({ userId: 'test-user-id' }),
  useUser: () => ({ user: { id: 'test-user-id' } }),
}));

jest.mock('../../app/JoinClub/_components', () => ({
  ClubListSkeleton: () => <div data-testid="club-list-skeleton" />,
  ClubDetailSkeleton: () => <div data-testid="club-detail-skeleton" />,
}));

jest.mock('../../app/JoinClub/_components/ClubsContent', () => ({
  ClubsContent: () => <div data-testid="clubs-content" />,
}));


interface ClubsMockData {
  getAllApprovedClubs: { id: string; name: string }[];
}

interface TeachersMockData {
  getAllTeachers: { id: string; name: string }[];
}


const successMocks: MockedResponse[] = [
  {
    request: { query: GET_ALL_APPROVED_CLUBS },
    result: { data: { getAllApprovedClubs: [] } as ClubsMockData },
  },
  {
    request: { query: GET_ALL_TEACHERS },
    result: { data: { getAllTeachers: [] } as TeachersMockData },
  },
];

const errorMocks: MockedResponse[] = [
  {
    request: { query: GET_ALL_APPROVED_CLUBS },
    error: new Error('Network error'),
  },
  {
    request: { query: GET_ALL_TEACHERS },
    result: { data: { getAllTeachers: [] } as TeachersMockData },
  },
];

const renderPage = (mocks: MockedResponse[]) =>
  render(
    <MockedProvider mocks={mocks}>
      <JoinClubPage />
    </MockedProvider>
  );

describe('JoinClubPage', () => {


  describe('Loading state', () => {


    it('ClubListSkeleton харуулна', () => {
      renderPage(successMocks);
      expect(screen.getByTestId('club-list-skeleton')).toBeInTheDocument();
    });

    it('ClubDetailSkeleton харуулна', () => {
      renderPage(successMocks);
      expect(screen.getByTestId('club-detail-skeleton')).toBeInTheDocument();
    });

    it('ClubsContent харуулахгүй', () => {
      renderPage(successMocks);
      expect(screen.queryByTestId('clubs-content')).not.toBeInTheDocument();
    });

    it('loading wrapper min-h-screen болон bg-cover class-тай байна', () => {
      const { container } = renderPage(successMocks);
      const wrapper = container.querySelector('.min-h-screen');
      expect(wrapper).toBeTruthy();
      expect(wrapper!.className).toMatch(/bg-cover/);
    });
  });

  describe('Success state', () => {

    it('ClubsContent харуулна', async () => {
      renderPage(successMocks);
      expect(await screen.findByTestId('clubs-content')).toBeInTheDocument();
    });

    it('skeleton-үүд арилна', async () => {
      renderPage(successMocks);
      await screen.findByTestId('clubs-content');
      expect(screen.queryByTestId('club-list-skeleton')).not.toBeInTheDocument();
      expect(screen.queryByTestId('club-detail-skeleton')).not.toBeInTheDocument();
    });

    it('success wrapper min-h-screen class-тай байна', async () => {
      const { container } = renderPage(successMocks);
      await screen.findByTestId('clubs-content');
      expect(container.querySelector('.min-h-screen')).toBeTruthy();
    });
  });

  describe('Error state', () => {
    it('алдаа гарсан үед алдааны мессеж харуулна', async () => {
      renderPage(errorMocks);
      expect(await screen.findByText(/Алдаа/)).toBeInTheDocument();
    });

    it('"Алдаа гарлаа" текст харуулна', async () => {
      renderPage(errorMocks);
      expect(await screen.findByText(/Алдаа гарлаа/)).toBeInTheDocument();
    });

    it('бодит error message харуулна', async () => {
      renderPage(errorMocks);
      expect(await screen.findByText(/Network error/)).toBeInTheDocument();
    });

    it('ClubsContent харуулахгүй', async () => {
      renderPage(errorMocks);
      await screen.findByText(/Алдаа гарлаа/);
      expect(screen.queryByTestId('clubs-content')).not.toBeInTheDocument();
    });
  });
});