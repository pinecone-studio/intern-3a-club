import {
  render,
  screen,
  fireEvent,
  waitFor,
  within,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import CreateClub from '../../app/createClub/page';
import React from 'react';

describe('CreateClub Page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('updates text inputs correctly', async () => {
    render(<CreateClub />);
    fireEvent.click(screen.getByText(/Клуб нээх/i));

    const nameInput = await screen.findByLabelText(/Клубын нэр/i);
    fireEvent.change(nameInput, { target: { value: 'Coding Club' } });
    expect(nameInput).toHaveValue('Coding Club');
  });

  it('updates numeric states via handleMax and handleMin', async () => {
    render(<CreateClub />);
    fireEvent.click(screen.getByText(/Клуб нээх/i));

    const maxInput = await screen.findByPlaceholderText('20');
    fireEvent.change(maxInput, { target: { value: '50' } });

    expect(maxInput).toHaveValue(50);
  });

  it('updates date state and submits correctly', async () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    render(<CreateClub />);

    fireEvent.click(screen.getByText(/Клуб нээх/i));

    const dateButton = await screen.findByRole('button', {
      name: /February 20th, 2026/i,
    });
    fireEvent.click(dateButton);

    const submitBtn = screen.getByRole('button', { name: /Create Club/i });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(logSpy).toHaveBeenCalledWith(
        'Шинэ клубын мэдээлэл:',
        expect.objectContaining({
          startDate: expect.any(Date),
        })
      );
    });

    logSpy.mockRestore();
  });

  it('updates selected teacher in the dropdown', async () => {
    render(<CreateClub />);
    fireEvent.click(screen.getByText(/Клуб нээх/i));

    const trigger = screen.getByRole('combobox', { name: /Хариуцсан багш/i });
    fireEvent.click(trigger);

    const listbox = await screen.findByRole('listbox');
    const option = within(listbox).getByText('Narantsatsralt');
    fireEvent.click(option);

    await waitFor(() => {
      expect(trigger).toHaveTextContent('Narantsatsralt');
    });
  });
});
