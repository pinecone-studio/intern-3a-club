import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import JoinClubPage from '../../app/JoinClub/page';
import {
  GET_ALL_APPROVED_CLUBS,
  GET_ALL_TEACHERS,
} from '../../lib/club-query';
import { MockedProvider } from '@apollo/client/testing/react';

jest.mock('@clerk/nextjs', () => ({
  useAuth: () => ({ userId: 'test-user-id' }),
  useUser: () => ({ user: { id: 'test-user-id' } }),
}));

const successMocks = [
  {
    request: { query: GET_ALL_APPROVED_CLUBS },
    result: { data: { getAllApprovedClubs: [] } },
  },
  {
    request: { query: GET_ALL_TEACHERS },
    result: { data: { getAllTeachers: [] } },
  },
];

const errorMocks = [
  {
    request: { query: GET_ALL_APPROVED_CLUBS },
    error: new Error('Network error'),
  },
  {
    request: { query: GET_ALL_TEACHERS },
    result: { data: { getAllTeachers: [] } },
  },
];

describe('JoinClubPage', () => {
  it('loading үед "Уншиж байна..." харуулна', () => {
    render(
      <MockedProvider mocks={successMocks}>
        <JoinClubPage />
      </MockedProvider>
    );
    expect(screen.getByText('Уншиж байна...')).toBeInTheDocument();
  });

  it('амжилттай дата ирсэн үед "Клуб сонгоно уу" харуулна', async () => {
    render(
      <MockedProvider mocks={successMocks}>
        <JoinClubPage />
      </MockedProvider>
    );
    await waitFor(() =>
      expect(screen.getByText('Клуб сонгоно уу')).toBeInTheDocument()
    );
  });

  it('алдаа гарсан үед алдааны мессеж харуулна', async () => {
    render(
      <MockedProvider mocks={errorMocks}>
        <JoinClubPage />
      </MockedProvider>
    );
    await waitFor(() =>
      expect(screen.getByText(/Алдаа/)).toBeInTheDocument()
    );
  });
});