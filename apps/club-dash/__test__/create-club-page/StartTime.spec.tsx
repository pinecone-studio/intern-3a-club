import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StartTime } from '../../app/createClub/_components';
import React, { ReactNode } from 'react';

interface MockSelectProps {
  children?: ReactNode;
  onValueChange: (_value: string) => void;
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
    SelectTrigger: ({ children }: { children: ReactNode }) => (
      <div>{children}</div>
    ),
    SelectValue: ({
      children,
      placeholder,
    }: {
      children?: ReactNode;
      placeholder?: string;
    }) => <div>{children || placeholder}</div>,
    SelectContent: ({ children }: { children: ReactNode }) => (
      <div>{children}</div>
    ),
    SelectGroup: ({ children }: { children: ReactNode }) => (
      <div>{children}</div>
    ),
    SelectItem: ({ children }: { children: ReactNode }) => (
      <div>{children}</div>
    ),
  };
});

describe('StartTime Component', () => {
  const mockSetStartTime = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with initial time', () => {
    render(
      <StartTime clubStartTime="13:00" setClubStartTime={mockSetStartTime} />
    );
    expect(screen.getByText(/Эхлэх цаг/i)).toBeInTheDocument();
    expect(screen.getByText('13:00')).toBeInTheDocument();
  });

  it('calls setClubStartTime when a valid time ID is selected (Hits lines 43-47)', () => {
    render(
      <StartTime clubStartTime="13:00" setClubStartTime={mockSetStartTime} />
    );

    const select = screen.getByTestId('mock-select');
    fireEvent.click(select);

    expect(mockSetStartTime).toHaveBeenCalledWith('13:00');
  });

  it('does not call setClubStartTime when an invalid ID is passed (Branch coverage)', () => {
    render(
      <StartTime clubStartTime="13:00" setClubStartTime={mockSetStartTime} />
    );

    const failBtn = screen.getByTestId('trigger-invalid');
    fireEvent.click(failBtn);

    expect(mockSetStartTime).not.toHaveBeenCalled();
  });
});
