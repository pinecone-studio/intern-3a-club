import CreateClub from '../../app/createClub/page';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

describe('CreateClub', () => {
  const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders all form inputs and initial state', () => {
    render(<CreateClub />);

    expect(logSpy).toHaveBeenCalledWith({
      clubStartDate: undefined,
      clubName: '',
      clubDesc: '',
      clubMaxStudent: '',
      clubMinStudent: '',
    });
  });

  it('updates state via handleClubName and handleClubDesc', () => {
    render(<CreateClub />);

    const nameInput = screen.getByLabelText(/club name/i);
    const descInput = screen.getByLabelText(/description/i);

    fireEvent.change(nameInput, { target: { value: 'Coding Club' } });
    fireEvent.change(descInput, { target: { value: 'Learning React' } });

    expect(logSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        clubName: 'Coding Club',
        clubDesc: 'Learning React',
      })
    );
  });

  it('updates numeric states via handleClubMax and handleClubMin', () => {
    render(<CreateClub />);

    const maxInput = screen.getByLabelText(/max student/i);
    const minInput = screen.getByLabelText(/min student/i);

    fireEvent.change(maxInput, { target: { value: '50' } });
    fireEvent.change(minInput, { target: { value: '10' } });

    expect(logSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        clubMaxStudent: '50',
        clubMinStudent: '10',
      })
    );
  });

  it('updates date state via handleDayClick', () => {
    render(<CreateClub />);

    const dateElement = screen.getByText('20');
    fireEvent.click(dateElement);

    expect(logSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        clubStartDate: expect.any(Date),
      })
    );
  });
});
