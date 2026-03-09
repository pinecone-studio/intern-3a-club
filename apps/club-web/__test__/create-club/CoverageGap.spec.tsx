/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {
  render,
  screen,
  fireEvent,
  waitFor,
  cleanup,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { MockedProvider } from '@apollo/client/testing/react';
import { CreateClubCenter } from '../../components/create-club/CreateClubCenter';
import { ClubForm } from '../../components/create-club/ClubForm';

import { CREATE_CLUB_WITH_SCHEDULE } from '../../graphql/mutations';
import {
  validateStep1,
  handleMutationResult,
  buildMutationVariables,
} from '../../components/create-club/create-club-helpers';

// Provide basic mock for SideSection parts if any query fails
jest.mock('../../components/club-add/PersonalClubs', () => ({
  MyClubsList: () => <div data-testid="my-clubs-list">Мои клубы</div>,
}));
jest.mock('../../components/club-add/RequestHistory', () => ({
  RequestHistory: () => <div data-testid="request-history">Хүсэлтийн түүх</div>,
}));

beforeEach(cleanup);

describe('create-club-helpers', () => {
  it('validateStep1 errors when fields are empty', () => {
    const err = validateStep1({ name: '  ', goal: '' });
    expect(err.name).toBe('Клубын нэр заавал оруулна уу');
    expect(err.goal).toBe('Клубын зорилго заавал оруулна уу');
  });

  it('validateStep1 passes when fields are valid', () => {
    const err = validateStep1({ name: 'Valid', goal: 'Valid' });
    expect(Object.keys(err).length).toBe(0);
  });

  it('buildMutationVariables builds correctly', () => {
    const vars = buildMutationVariables({ name: 'Test', goal: 'Test Goal' });
    expect(vars.input.name).toBe('Test');
    expect(vars.input.type).toBe('mentor');
    expect(vars.frequency).toBe('ONCE');
  });

  it('handleMutationResult handles error', () => {
    const res = { errors: [{ message: 'Bad graphql' }] };
    window.alert = jest.fn();
    const result = handleMutationResult(res as any, () => { });
    expect(result.success).toBe(false);
    expect(window.alert).toHaveBeenCalledWith('Алдаа: Bad graphql');
  });

  it('handleMutationResult handles success', () => {
    const res = { data: { createClubWithSchedules: { id: '1' } } };
    const onSuccess = jest.fn();
    const result = handleMutationResult(res as any, onSuccess);
    expect(result.success).toBe(true);
    expect(onSuccess).toHaveBeenCalled();
  });

  it('handleMutationResult when errors is empty array', () => {
    const res = { data: { createClubWithSchedules: { id: '1' } }, errors: [] };
    const onSuccess = jest.fn();
    const result = handleMutationResult(res as any, onSuccess);
    expect(result.success).toBe(true);
    expect(onSuccess).toHaveBeenCalled();
  });

  it('handleMutationResult when no data and no errors — isSuccess is false', () => {
    // Covers the branch where isSuccess = false and onSuccess is NOT called
    const res = { data: null };
    const onSuccess = jest.fn();
    const result = handleMutationResult(res as any, onSuccess);
    expect(result.success).toBe(false);
    expect(onSuccess).not.toHaveBeenCalled();
  });
});

describe('CreateClubCenter Integration', () => {
  it('renders and shows validation error on submit empty form', async () => {
    render(
      <MockedProvider mocks={[]}>
        <CreateClubCenter />
      </MockedProvider>
    );

    await screen.findByText('Клуб Нээх');
    fireEvent.click(screen.getByRole('button', { name: /Хүсэлт илгээх/i }));

    // validation should prevent submit and show errors
    await waitFor(() => {
      expect(
        screen.getByText('Клубын нэр заавал оруулна уу')
      ).toBeInTheDocument();
      expect(
        screen.getByText('Клубын зорилго заавал оруулна уу')
      ).toBeInTheDocument();
    });
  });

  it('fills out form, clears error, and submits successfully', async () => {
    const mocks = [
      {
        request: {
          query: CREATE_CLUB_WITH_SCHEDULE,
          variables: buildMutationVariables({
            name: 'Test Name',
            goal: 'Test Goal',
          }),
        },
        result: {
          data: {
            createClubWithSchedules: {
              id: 'new-id',
              name: 'Test Name',
              __typename: 'Club',
            },
          },
        },
      },
    ];

    render(
      <MockedProvider mocks={mocks}>
        <CreateClubCenter />
      </MockedProvider>
    );

    // Initial empty submit to trigger error
    fireEvent.click(
      await screen.findByRole('button', { name: /Хүсэлт илгээх/i })
    );

    // Type in fields
    const nameInput = screen.getByPlaceholderText('Wizards Club...');
    fireEvent.change(nameInput, {
      target: { name: 'name', value: 'Test Name' },
    });

    const goalInput = screen.getByPlaceholderText('Зорилго...');
    fireEvent.change(goalInput, {
      target: { name: 'goal', value: 'Test Goal' },
    });

    // Ensure error states cleared visually
    await waitFor(() => {
      expect(
        screen.queryByText('Клубын нэр заавал оруулна уу')
      ).not.toBeInTheDocument();
    });

    window.alert = jest.fn();

    // Submit valid form
    fireEvent.click(screen.getByRole('button', { name: /Хүсэлт илгээх/i }));

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith('Клуб амжилттай үүслээ');
    });
  });
});

describe('ClubForm Extra branch coverage', () => {
  it('renders ClubForm without crashing', () => {
    const submit = jest.fn();
    render(
      // '@ts-expect-error'
      <ClubForm
        formData={{ name: 'A', goal: 'B' }}
        handleFormChange={() => { }}
        errors={{}}
        loading={false}
        handleSubmit={submit as any}
      />
    );
    fireEvent.click(screen.getByRole('button', { name: /Хүсэлт илгээх/i }));
    expect(submit).toHaveBeenCalled();
  });

  it('renders loading state with "Илгээж байна..."', () => {
    render(
      <ClubForm
        formData={{ name: 'A', goal: 'B' }}
        handleFormChange={() => { }}
        errors={{}}
        loading={true}
        handleSubmit={jest.fn() as any}
      />
    );
    expect(screen.getByRole('button')).toHaveTextContent('Илгээж байна...');
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
