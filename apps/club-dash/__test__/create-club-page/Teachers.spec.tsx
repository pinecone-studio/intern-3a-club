import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Teachers } from '../../app/createClub/_components';

describe('Teachers Component', () => {
  it('renders the correct label and placeholder', () => {
    render(<Teachers />);

    // expect(screen.getByText(/Хариуцсан багш/i)).toBeInTheDocument();

    expect(
      screen.getByText(/Хариуцсан багш/i, { selector: 'label' })
    ).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toHaveTextContent('Хариуцсан багш');
  });

  it('opens the dropdown and displays the list of teachers', async () => {
    render(<Teachers />);

    const trigger = screen.getByRole('combobox');
    fireEvent.click(trigger);

    expect(await screen.findByText('Erdenetsogt')).toBeInTheDocument();
    expect(screen.getByText('Narantsatsralt')).toBeInTheDocument();
    expect(screen.getByText('Bilguundul')).toBeInTheDocument();
  });

  it('updates the selected teacher when an option is clicked', async () => {
    render(<Teachers />);

    const trigger = screen.getByRole('combobox');
    fireEvent.click(trigger);

    const option = await screen.findByText('Narantsatsralt');
    fireEvent.click(option);

    expect(screen.getByRole('combobox')).toHaveTextContent('Narantsatsralt');
  });
});
