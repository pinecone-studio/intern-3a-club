import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '../components/Header';

// Clerk-ийг mock хийх
jest.mock('@clerk/nextjs', () => ({
  SignedIn: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="signed-in">{children}</div>
  ),
  SignedOut: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="signed-out">{children}</div>
  ),
  SignInButton: () => <button>Sign In</button>,
  SignUpButton: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  UserButton: () => <div data-testid="user-button">User Profile</div>,
}));

// Next/Link-ийг mock хийх
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
});

describe('Header Component', () => {
  it('үндсэн цэсүүд зөв харагдаж байгаа эсэхийг шалгах', () => {
    render(<Header />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
  });

  it('хэрэглэгчийн статистик (Flame, Star, XP) зөв харагдаж байгаа эсэх', () => {
    render(<Header />);

    expect(screen.getByText('100')).toBeInTheDocument(); // Flame
    expect(screen.getByText('882')).toBeInTheDocument(); // Star
    expect(screen.getByText(/4344/)).toBeInTheDocument(); // XP
  });

  it('нэвтрээгүй үед Sign In болон Sign Up товч харагдах ёстой', () => {
    render(<Header />);

    const signedOutContainer = screen.getByTestId('signed-out');
    expect(signedOutContainer).toBeInTheDocument();
    expect(screen.getByText('Sign In')).toBeInTheDocument();
    expect(screen.getByText('Sign Up')).toBeInTheDocument();
  });

  it('нэвтэрсэн үед UserButton харагдах ёстой', () => {
    render(<Header />);

    const signedInContainer = screen.getByTestId('signed-in');
    expect(signedInContainer).toBeInTheDocument();
    expect(screen.getByTestId('user-button')).toBeInTheDocument();
  });
});
