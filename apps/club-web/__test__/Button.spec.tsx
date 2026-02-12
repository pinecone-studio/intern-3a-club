import { render, screen, fireEvent } from '@testing-library/react';
import { CustomButton } from '../app/JoinClub/_components/ui/Button';

describe('CustomButton Component', () => {
  it('Primary variant-тай зөв render хийгдэж байна', () => {
    render(<CustomButton variant="primary">Click Me</CustomButton>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toHaveClass('bg-blue-600');
  });

  it('Destructive variant-тай зөв render хийгдэж байна', () => {
    render(<CustomButton variant="destructive">Delete</CustomButton>);
    const button = screen.getByRole('button', { name: /delete/i });
    expect(button).toHaveClass('bg-red-500');
  });

  it('Muted variant-тай үед зөв класс авч байна', () => {
    render(<CustomButton variant="muted">Muted</CustomButton>);
    const button = screen.getByRole('button', { name: /muted/i });
    expect(button).toHaveClass('bg-white/5', 'cursor-not-allowed');
  });

  it('Товчлуур дарахад onClick функц дуудагдаж байна', () => {
    const handleClick = jest.fn();
    render(<CustomButton onClick={handleClick}>Click</CustomButton>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('Disabled үед товчлуур идэвхгүй байна', () => {
    render(<CustomButton disabled>Disabled</CustomButton>);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
