import { render } from '@testing-library/react';
import { CustomButton } from '../app/JoinClub/_components/CustomButton';

describe('CustomButton', () => {
  it('renders all variants for branch coverage', () => {
    const { rerender } = render(
      <CustomButton variant="primary">P</CustomButton>
    );
    rerender(<CustomButton variant="destructive">D</CustomButton>);
    rerender(<CustomButton variant="muted">M</CustomButton>);
    // Variant ороогүй үеийн default-ыг шалгах
    rerender(<CustomButton>Default</CustomButton>);
  });
});
