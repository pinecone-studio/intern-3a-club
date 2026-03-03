import { render, screen } from '@testing-library/react';
import SignInPage from 'apps/club-web/app/sign-in/[[...sign-in]]/page';

jest.mock('@clerk/nextjs', () => ({
  SignIn: () => <div data-testid="clerk-signin">Mocked SignIn Component</div>,
}));

describe('SignInPage', () => {
  it('should render the sign-in page container', () => {
    const { container } = render(<SignInPage />);

    // Layout-ийн классууд байгаа эсэхийг шалгах
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toHaveClass(
      'flex',
      'min-h-screen',
      'items-center',
      'justify-center'
    );
  });

  it('should render the Clerk SignIn component', () => {
    render(<SignInPage />);

    // Mock хийсэн компонент маань дэлгэц дээр байгаа эсэхийг шалгах
    const signInComponent = screen.getByTestId('clerk-signin');
    expect(signInComponent).toBeInTheDocument();
    expect(signInComponent).toHaveTextContent('Mocked SignIn Component');
  });
});
