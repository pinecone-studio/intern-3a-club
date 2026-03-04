import { render, screen } from '@testing-library/react';
import { CustomButton } from '../../app/JoinClub/_components/ui/CustomButton'

describe('Button Component', () => {
  it('renders correctly', () => {
    render(<CustomButton>Base Button</CustomButton>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});

