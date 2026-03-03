import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PendingModal } from '../../../app/_components/teacher/pending/PendingModal';
import type { Club } from '../../../libs/types';

jest.mock('@intern-3a-club/shadcn', () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires -- Jest mock factory cannot reference outer scope (e.g. React)
  const React = require('react');
  const actual = jest.requireActual('@intern-3a-club/shadcn');

  return {
    ...actual,
    Dialog: (props: React.ComponentProps<typeof actual.Dialog>) => {
      // Dialog-ийн onOpenChange-ээр дамжуулж setOpenModal(false) дуудагдаж байгаа эсэхийг шалгахын тулд
      // props-ийг шууд дамжуулж, children-ийг render хийнэ.
      return React.createElement(actual.Dialog, props);
    },
  };
});

const club: Club = {
  id: '1',
  name: 'Test Club',
  description: 'desc',
  teacherId: 't1',
  minMember: 5,
  maxMember: 10,
  status: 'pending',
  timetables: [
    {
      id: 't1',
      clubId: '1',
      date: '2025-01-01',
      room: '101',
      clubStartTime: '10:00',
      duration: 60,
    },
  ],
};

describe('PendingModal', () => {
  it('renders header with pending count and single club', () => {
    const setOpenModal = jest.fn();

    render(
      <PendingModal
        pending={[club]}
        setOpenModal={setOpenModal}
        onApprove={jest.fn()}
        onReject={jest.fn()}
      />
    );

    expect(screen.getByText(/pending requests/i)).toBeInTheDocument();
    expect(screen.getByText(/1 club awaiting review/i)).toBeInTheDocument();
    expect(screen.getByText('Test Club')).toBeInTheDocument();
  });

  it('renders multiple pending items', () => {
    const club2: Club = { ...club, id: '2', name: 'Club 2' };

    render(
      <PendingModal
        pending={[club, club2]}
        setOpenModal={jest.fn()}
        onApprove={jest.fn()}
        onReject={jest.fn()}
      />
    );

    expect(screen.getByText('Test Club')).toBeInTheDocument();
    expect(screen.getByText('Club 2')).toBeInTheDocument();
    expect(screen.getByText(/2 clubs awaiting review/i)).toBeInTheDocument();
  });
});
