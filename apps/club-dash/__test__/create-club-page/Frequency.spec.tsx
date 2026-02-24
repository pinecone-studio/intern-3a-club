import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Frequency } from '../../app/createClub/_components';
import React, { ReactNode, MouseEvent } from 'react';

interface MockBaseProps {
  children?: ReactNode;
}

interface MockSelectProps extends MockBaseProps {
  onValueChange: (_value: string) => void;
}

interface MockSimpleProps extends MockBaseProps {
  placeholder?: string;
  value?: string;
}

interface MockButtonProps extends MockBaseProps {
  onClick?: (_e: MouseEvent<HTMLButtonElement>) => void;
  'data-id'?: string;
  className?: string;
}

jest.mock('@intern-3a-club/shadcn', () => {
  const actual = jest.requireActual('@intern-3a-club/shadcn');
  return {
    ...actual,
    Select: ({ children, onValueChange }: MockSelectProps) => (
      <div data-testid="mock-select" onClick={() => onValueChange('2')}>
        <button
          data-testid="trigger-fail"
          onClick={(_e) => {
            _e.stopPropagation();
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
    SelectItem: ({ children, value: _value }: MockSimpleProps) => (
      <div data-testid={`item-${_value}`}>{children}</div>
    ),
    Button: ({
      children,
      onClick,
      'data-id': dataId,
      className,
    }: MockButtonProps) => (
      <button onClick={onClick} data-id={dataId} className={className}>
        {children}
      </button>
    ),
  };
});

describe('Frequency Component', () => {
  const mockSetFreq = jest.fn();
  const mockSetFreqId = jest.fn();
  const mockSetDays = jest.fn();

  const defaultProps = {
    clubFrequency: 'Weekly',
    setClubFrequency: mockSetFreq,
    selectedDays: [] as string[],
    setSelectedDays: mockSetDays,
    selectedFreqId: '2',
    setSelectedFreqId: mockSetFreqId,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('toggles day selection: adds if not present, removes if present', () => {
    const { rerender } = render(
      <Frequency {...defaultProps} selectedDays={[]} />
    );
    const mondayBtn = screen.getByText('M');

    fireEvent.click(mondayBtn);
    const adderFn = mockSetDays.mock.calls[0][0];
    expect(adderFn([])).toEqual(['1']);

    rerender(<Frequency {...defaultProps} selectedDays={['1']} />);
    fireEvent.click(mondayBtn);
    const removerFn = mockSetDays.mock.calls[1][0];
    expect(removerFn(['1'])).toEqual([]);
  });

  it('covers the frequency selection branch', () => {
    render(<Frequency {...defaultProps} />);
    fireEvent.click(screen.getByTestId('mock-select'));
    expect(mockSetFreqId).toHaveBeenCalledWith('2');
    expect(mockSetFreq).toHaveBeenCalled();
  });

  it('covers the return early branch when data-id is missing', () => {
    render(<Frequency {...defaultProps} />);
    const mondayBtn = screen.getByText('M');
    mondayBtn.removeAttribute('data-id');
    fireEvent.click(mondayBtn);
    expect(mockSetDays).not.toHaveBeenCalled();
  });

  it('handles invalid frequency ID fallback', () => {
    render(<Frequency {...defaultProps} />);
    fireEvent.click(screen.getByTestId('trigger-fail'));
    expect(mockSetFreq).not.toHaveBeenCalled();
  });

  it('hides days when frequency is "Once"', () => {
    render(<Frequency {...defaultProps} selectedFreqId="1" />);
    expect(screen.queryByText('M')).not.toBeInTheDocument();
  });
});
