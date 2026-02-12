import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import CreateClub from '../../app/createClub/page';

describe('CreateClub', () => {
  it('updates state via handleClubName and handleClubDesc', async () => {
    render(<CreateClub />);

    const openButton = screen.getByText(/Клуб нээх/i);
    fireEvent.click(openButton);

    const nameInput = await screen.findByLabelText(/Клубын нэр/i);
    const descInput = await screen.findByLabelText(/Клубын зорилго/i);

    fireEvent.change(nameInput, { target: { value: 'Coding Club' } });
    fireEvent.change(descInput, { target: { value: 'Learn to code' } });

    expect(nameInput).toHaveValue('Coding Club');
    expect(descInput).toHaveValue('Learn to code');
  });

  it('updates numeric states via handleClubMax and handleClubMin', async () => {
    render(<CreateClub />);

    fireEvent.click(screen.getByText(/Клуб нээх/i));

    const maxInput = await screen.findByPlaceholderText(/Max: 20/i);
    const minInput = await screen.findByPlaceholderText(/Min/i);

    fireEvent.change(maxInput, { target: { value: '50' } });
    fireEvent.change(minInput, { target: { value: '10' } });

    expect(maxInput).toHaveValue('50');
    expect(minInput).toHaveValue('10');
  });

  it('updates date state via handleDayClick', async () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    render(<CreateClub />);
    fireEvent.click(screen.getByText(/Клуб нээх/i));

    const dateElement = await screen.findByText('20');
    fireEvent.click(dateElement);

    await waitFor(() => {
      expect(logSpy).toHaveBeenCalledWith(
        expect.objectContaining({
          clubStartDate: expect.any(Date),
        })
      );
    });

    logSpy.mockRestore();
  });
});
