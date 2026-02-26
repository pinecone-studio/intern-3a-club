import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MockedProvider } from '@apollo/client/testing/react';
import { CreateClubCenter } from '../../components/create-club/CreateClubCenter';
import { commonMocks } from '../common-mocks';

describe('Calendar Interaction Suite', () => {
  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date('2024-04-15'));
  });

  afterEach(() => {
    jest.useRealTimers();
    cleanup();
  });

  it('toggles date selection on and off (CreateClubCenter line 74)', async () => {
    render(
      <MockedProvider mocks={commonMocks}>
        <CreateClubCenter />
      </MockedProvider>
    );
    await screen.findByText(/Клуб бүртгүүлэх/i);
    await screen.findByText(/Mock Club/i);
    await screen.findByText(/Teacher One/i);

    // Fill Step 1
    fireEvent.change(screen.getByPlaceholderText(/Wizards Club.../i), {
      target: { value: 'Coding Club', name: 'name' },
    });
    fireEvent.change(screen.getByRole('combobox'), {
      target: { value: '1', name: 'teacher' },
    });
    fireEvent.change(screen.getByPlaceholderText(/Зорилго.../i), {
      target: { value: 'Learn to code', name: 'goal' },
    });
    fireEvent.click(screen.getByText(/Үргэлжлүүлэх/i));

    const buttons = screen
      .getAllByRole('button')
      .filter((b) => b.textContent === '15' && !b.hasAttribute('disabled'));
    const dayBtn = buttons[0];

    fireEvent.click(dayBtn); // Select
    fireEvent.click(dayBtn); // Deselect (Hits Line 74)
    fireEvent.click(dayBtn); // Select again
  });

  it('navigates months and renders empty slots', async () => {
    render(
      <MockedProvider mocks={commonMocks}>
        <CreateClubCenter />
      </MockedProvider>
    );
    await screen.findByText(/Клуб бүртгүүлэх/i);
    await screen.findByText(/Mock Club/i);
    await screen.findByText(/Teacher One/i);
    // Fill Step 1
    fireEvent.change(screen.getByPlaceholderText(/Wizards Club.../i), {
      target: { value: 'Coding Club', name: 'name' },
    });
    fireEvent.change(screen.getByRole('combobox'), {
      target: { value: '1', name: 'teacher' },
    });
    fireEvent.change(screen.getByPlaceholderText(/Зорилго.../i), {
      target: { value: 'Learn to code', name: 'goal' },
    });
    fireEvent.click(screen.getByText(/Үргэлжлүүлэх/i));

    fireEvent.click(screen.getByTestId('next-month-btn'));
    fireEvent.click(screen.getByTestId('prev-month-btn'));
  });

  it('handles sorting and date removal via icon', async () => {
    render(
      <MockedProvider mocks={commonMocks}>
        <CreateClubCenter />
      </MockedProvider>
    );
    await screen.findByText(/Клуб бүртгүүлэх/i);
    await screen.findByText(/Mock Club/i);
    await screen.findByText(/Teacher One/i);
    // Fill Step 1
    fireEvent.change(screen.getByPlaceholderText(/Wizards Club.../i), {
      target: { value: 'Coding Club', name: 'name' },
    });
    fireEvent.change(screen.getByRole('combobox'), {
      target: { value: '1', name: 'teacher' },
    });
    fireEvent.change(screen.getByPlaceholderText(/Зорилго.../i), {
      target: { value: 'Learn to code', name: 'goal' },
    });
    fireEvent.click(screen.getByText(/Үргэлжлүүлэх/i));

    const buttons = screen
      .getAllByRole('button')
      .filter(
        (b) =>
          /^[0-9]+$/.test(b.textContent || '') && !b.hasAttribute('disabled')
      );

    fireEvent.click(buttons[1]); // Sorting trigger
    fireEvent.click(buttons[0]);

    const removeIcon = screen.getAllByTestId('remove-date-icon')[0];
    fireEvent.click(removeIcon);
  });
});
