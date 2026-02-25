import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Frequency } from '../../app/createClub/_components';
import React, { ReactNode } from 'react';

interface MockSelectProps {
  children?: ReactNode;
  onValueChange: (_value: string) => void;
  value?: string;
}

jest.mock('@intern-3a-club/shadcn', () => {
  return {
    Label: ({ children }: { children: ReactNode }) => <label>{children}</label>,
    Select: ({ children, onValueChange }: MockSelectProps) => (
      <div data-testid="mock-select-wrapper" onClick={() => onValueChange('2')}>
        <button
          data-testid="trigger-unknown"
          onClick={(e) => {
            e.stopPropagation();
            onValueChange('99');
          }}
        >
          Select Unknown
        </button>
        <button
          data-testid="trigger-term"
          onClick={(e) => {
            e.stopPropagation();
            onValueChange('3');
          }}
        >
          Select 3 Months
        </button>
        {children}
      </div>
    ),
    SelectTrigger: ({ children }: { children: ReactNode }) => (
      <div>{children}</div>
    ),
    SelectValue: ({ placeholder }: { placeholder?: string }) => (
      <div>{placeholder}</div>
    ),
    SelectContent: ({ children }: { children: ReactNode }) => (
      <div>{children}</div>
    ),
    SelectItem: ({
      children,
      value,
    }: {
      children: ReactNode;
      value: string;
    }) => <div data-testid={`item-${value}`}>{children}</div>,
  };
});

describe('Frequency Component Coverage', () => {
  const mockSetSelectedFreqId = jest.fn();
  const mockSetClubTerm = jest.fn();
  const mockSetClubFrequency = jest.fn();

  const defaultProps = {
    selectedFreqId: '1',
    setSelectedFreqId: mockSetSelectedFreqId,
    clubTerm: '1',
    setClubTerm: mockSetClubTerm,
    setClubFrequency: mockSetClubFrequency,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the frequency label', () => {
    render(<Frequency {...defaultProps} />);
    expect(screen.getByText('Давтамж')).toBeInTheDocument();
  });

  it('updates frequency and label when a selection is made', () => {
    render(<Frequency {...defaultProps} />);
    fireEvent.click(screen.getByTestId('mock-select-wrapper'));

    expect(mockSetSelectedFreqId).toHaveBeenCalledWith('2');
    expect(mockSetClubFrequency).toHaveBeenCalledWith('Долоо хоног бүр');
  });

  it('handles the fallback case when frequency ID is not found (Coverage for Line 40)', () => {
    render(<Frequency {...defaultProps} />);

    fireEvent.click(screen.getByTestId('trigger-unknown'));

    expect(mockSetSelectedFreqId).toHaveBeenCalledWith('99');
    expect(mockSetClubFrequency).toHaveBeenCalledWith('');
  });

  it('shows the Duration section only when Weekly (id: 2) is selected', () => {
    const { rerender } = render(
      <Frequency {...defaultProps} selectedFreqId="1" />
    );
    expect(screen.queryByText(/Үргэлжлэх Хугацаа/i)).not.toBeInTheDocument();

    rerender(<Frequency {...defaultProps} selectedFreqId="2" />);
    expect(screen.getByText(/Үргэлжлэх Хугацаа/i)).toBeInTheDocument();
  });

  it('calls setClubTerm when duration is changed', () => {
    render(<Frequency {...defaultProps} selectedFreqId="2" />);
    const termTriggers = screen.getAllByTestId('trigger-term');
    fireEvent.click(termTriggers[1]);
    expect(mockSetClubTerm).toHaveBeenCalledWith('3');
  });
});
