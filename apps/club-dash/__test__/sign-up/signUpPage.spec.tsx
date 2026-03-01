import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SignUpPage from 'apps/club-dash/app/sign-up/[[...sign-up]]/page';

// 1. Clerk-ийн SignUp-ийг mock хийх
// Ингэснээр Clerk-ийн дотоод төвөгтэй байдлаас ангид зөвхөн өөрийн хуудсаа тестэлнэ
jest.mock('@clerk/nextjs', () => ({
  SignUp: () => <div data-testid="clerk-signup">Mocked SignUp Component</div>,
}));

describe('SignUpPage', () => {
  it('should render the sign-up page with correct layout classes', () => {
    const { container } = render(<SignUpPage />);

    // Layout-ийн div нь төвлөрсөн (centered) байгааг шалгах
    const mainDiv = container.firstChild as HTMLElement;
    expect(mainDiv).toHaveClass(
      'flex',
      'min-h-screen',
      'items-center',
      'justify-center'
    );
  });

  it('should contain the SignUp component from Clerk', () => {
    render(<SignUpPage />);

    // Mock хийсэн SignUp компонент дэлгэц дээр харагдаж буйг шалгах
    const signUpElement = screen.getByTestId('clerk-signup');
    expect(signUpElement).toBeInTheDocument();
    expect(signUpElement).toHaveTextContent('Mocked SignUp Component');
  });
});
