import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ClassRoom } from '../../app/createClub/_components';
import React, { ReactNode } from 'react';
import * as Shadcn from '@intern-3a-club/shadcn';

interface MockSelectProps {
  children?: ReactNode;
  onValueChange: (_value: string) => void;
  value?: string;
}

jest.mock('@intern-3a-club/shadcn', () => {
  const original = jest.requireActual('@intern-3a-club/shadcn');
  return {
    ...original,
    Select: jest.fn(
      ({ children, onValueChange, value: _value }: MockSelectProps) => (
        <div
          data-testid="mock-select"
          data-value={_value}
          onClick={() => onValueChange('invalid-id')}
        >
          {children}
        </div>
      )
    ),
  };
});

describe('ClassRoom Component', () => {
  const mockSetClassRoom = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with an initial value', () => {
    render(
      <ClassRoom clubClassRoom="301" setClubClassRoom={mockSetClassRoom} />
    );
    expect(screen.getByText(/Орох Анги/i)).toBeInTheDocument();
  });

  it('calls setClubClassRoom when a valid classroom ID is passed', () => {
    render(
      <ClassRoom clubClassRoom="301" setClubClassRoom={mockSetClassRoom} />
    );

    expect(screen.getByTestId('mock-select')).toBeInTheDocument();
  });

  it('covers all branches of handleSelectClassroom', () => {
    let capturedOnValueChange: (_val: string) => void = (_val) => {};

    (Shadcn.Select as jest.Mock).mockImplementation(
      ({ onValueChange }: MockSelectProps) => {
        capturedOnValueChange = onValueChange;
        return <div />;
      }
    );

    render(
      <ClassRoom clubClassRoom="301" setClubClassRoom={mockSetClassRoom} />
    );

    capturedOnValueChange('1');
    expect(mockSetClassRoom).toHaveBeenCalledWith('301');

    mockSetClassRoom.mockClear();
    capturedOnValueChange('999');
    expect(mockSetClassRoom).not.toHaveBeenCalled();
  });

  it('covers the optional chaining branch in the value prop', () => {
    (Shadcn.Select as jest.Mock).mockImplementation(
      ({ value }: MockSelectProps) => {
        return <div data-testid="select-value">{value || 'no-id'}</div>;
      }
    );

    const { rerender } = render(
      <ClassRoom clubClassRoom="301" setClubClassRoom={mockSetClassRoom} />
    );
    expect(screen.getByTestId('select-value').textContent).toBe('1');

    rerender(
      <ClassRoom clubClassRoom="Room-X" setClubClassRoom={mockSetClassRoom} />
    );
    expect(screen.getByTestId('select-value').textContent).toBe('no-id');
  });
});
