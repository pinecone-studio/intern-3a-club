import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SignUpPage from 'apps/club-web/app/sign-up/[[...sign-up]]/page';

jest.mock('@clerk/nextjs', () => ({
  SignUp: () => <div data-testid="clerk-signup">Mocked SignUp Component</div>,
}));

describe('SignUpPage', () => {
  it('should render the sign-up page with correct layout classes', () => {
    const { container } = render(<SignUpPage />);

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

    const signUpElement = screen.getByTestId('clerk-signup');
    expect(signUpElement).toBeInTheDocument();
    expect(signUpElement).toHaveTextContent('Mocked SignUp Component');
  });
});
