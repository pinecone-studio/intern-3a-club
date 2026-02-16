import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StartTime } from '../../app/createClub/_components';
import React, { useState } from 'react';

const StartTimeWrapper = () => {
  const [time, setTime] = useState('13:00');
  return <StartTime clubStartTime={time} setClubStartTime={setTime} />;
};

describe('StartTime Component', () => {
  it('renders the correct label and initial placeholder value', () => {
    render(<StartTimeWrapper />);
    expect(screen.getByText(/Эхлэх цаг/i)).toBeInTheDocument();
    expect(screen.getByText('13:00')).toBeInTheDocument();
  });

  it('updates the trigger text when a new time is selected', async () => {
    render(<StartTimeWrapper />);

    const trigger = screen.getByRole('combobox');
    fireEvent.click(trigger);

    const option = await screen.findByText('15:00');
    fireEvent.click(option);

    await waitFor(() => {
      expect(screen.getByText('15:00')).toBeInTheDocument();
    });

    expect(screen.queryByText('13:00')).not.toBeInTheDocument();
  });
});
