import { render, screen } from '@testing-library/react';
import { Avatar, AvatarImage } from '../app/JoinClub/_components/ui/Avatar';

describe('Avatar Component', () => {
  it('Avatar доторх контентыг зөв харуулж байна', () => {
    render(
      <Avatar className="custom-class">
        <span>Test Child</span>
      </Avatar>
    );
    expect(screen.getByText('Test Child')).toBeInTheDocument();
    expect(screen.getByText('Test Child').parentElement).toHaveClass(
      'custom-class'
    );
  });

  it('AvatarImage (User icon) зөв render хийгдэж байна', () => {
    const { container } = render(<AvatarImage />);
    // lucide-react-ийн User icon нь svg байдаг
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveClass('lucide-user');
  });
});
