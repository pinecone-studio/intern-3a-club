import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Duration } from '../../app/createClub/_components';
import React, { ReactNode } from 'react';

interface MockSelectProps {
  children?: ReactNode;
  onValueChange: (_value: string) => void;
}

interface MockSimpleProps {
  children?: ReactNode;
  placeholder?: string;
  value?: string;
}

jest.mock('@intern-3a-club/shadcn', () => {
  const actual = jest.requireActual('@intern-3a-club/shadcn');
  return {
    ...actual,
    Select: ({ children, onValueChange }: MockSelectProps) => (
      <div data-testid="mock-select" onClick={() => onValueChange('1')}>
        <button
          data-testid="trigger-invalid"
          onClick={(e) => {
            e.stopPropagation();
            onValueChange('999');
          }}
        >
          Fail
        </button>
        {children}
      </div>
    ),
    SelectTrigger: ({ children }: MockSimpleProps) => <div>{children}</div>,
    SelectValue: ({ children, placeholder }: MockSimpleProps) => (
      <div>{children || placeholder}</div>
    ),
    SelectContent: ({ children }: MockSimpleProps) => <div>{children}</div>,
    SelectGroup: ({ children }: MockSimpleProps) => <div>{children}</div>,
    SelectItem: ({ children, value: _value }: MockSimpleProps) => (
      <div data-testid={`item-${_value}`}>{children}</div>
    ),
  };
});

describe('Duration Component', () => {
  const mockSetDuration = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with the provided duration', () => {
    render(<Duration clubDuration="1:30" setClubDuration={mockSetDuration} />);
    expect(screen.getByText(/Үргэлжлэх хугацаа/i)).toBeInTheDocument();
  });

  it('calls setClubDuration when a valid ID is selected', () => {
    render(<Duration clubDuration="1:00" setClubDuration={mockSetDuration} />);
    fireEvent.click(screen.getByTestId('mock-select'));
    expect(mockSetDuration).toHaveBeenCalledWith('1:00');
  });

  it('does NOT call setClubDuration when an invalid ID is selected', () => {
    render(<Duration clubDuration="1:00" setClubDuration={mockSetDuration} />);
    fireEvent.click(screen.getByTestId('trigger-invalid'));
    expect(mockSetDuration).not.toHaveBeenCalled();
  });
});
