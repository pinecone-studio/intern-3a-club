import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { EditTimetableForm } from '../../../app/_components/teacher/approved/edit/EditTimetableForm';

/* -------------------------------------------------------------------------- */
/*                              MOCK SHADCN                                   */
/* -------------------------------------------------------------------------- */

jest.mock('@intern-3a-club/shadcn', () => {
  return {
    Label: ({ children }: { children: React.ReactNode }) => (
      <label>{children}</label>
    ),

    Select: ({
      value,
      onValueChange,
      children,
    }: {
      value: string;
      onValueChange: (_value: string) => void;
      children: React.ReactNode;
    }) => (
      <div data-testid="select" data-value={value}>
        {React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(child, { onValueChange })
            : child
        )}
      </div>
    ),

    SelectTrigger: ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    ),
    SelectValue: () => <span data-testid="select-value" />,

    SelectContent: ({
      children,
      onValueChange,
    }: {
      children: React.ReactNode;
      onValueChange: (_value: string) => void;
    }) => (
      <div>
        {React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(child, { onValueChange })
            : child
        )}
      </div>
    ),

    SelectItem: ({
      value,
      children,
      onValueChange,
    }: {
      value: string;
      children: React.ReactNode;
      onValueChange?: (_value: string) => void;
    }) => (
      <button onClick={() => onValueChange?.(value)}>{children}</button>
    ),
  };
});

/* -------------------------------------------------------------------------- */

describe('EditTimetableForm', () => {
  const mockClassroom = [
    { id: '1', classRoom: '101' },
    { id: '2', classRoom: '102' },
  ];

  const mockStartTime = [
    { id: '1', startTime: '10:00' },
    { id: '2', startTime: '11:00' },
  ];

  const mockDuration = [
    { id: '1', duration: '1:00' },
    { id: '2', duration: '2:00' },
  ];

  it('renders all labels and options', () => {
    render(
      <EditTimetableForm
        room="101"
        time="10:00"
        duration="1:00"
        onRoomChange={jest.fn()}
        onTimeChange={jest.fn()}
        onDurationChange={jest.fn()}
        mockClassroom={mockClassroom}
        mockStartTime={mockStartTime}
        mockDuration={mockDuration}
      />
    );

    expect(screen.getByText('Room')).toBeInTheDocument();
    expect(screen.getByText('Start')).toBeInTheDocument();
    expect(screen.getByText('Duration')).toBeInTheDocument();

    expect(screen.getByText('101')).toBeInTheDocument();
    expect(screen.getByText('102')).toBeInTheDocument();
    expect(screen.getByText('10:00')).toBeInTheDocument();
    expect(screen.getByText('11:00')).toBeInTheDocument();
    expect(screen.getByText('1:00')).toBeInTheDocument();
    expect(screen.getByText('2:00')).toBeInTheDocument();
  });

  it('calls onRoomChange when room selected', () => {
    const onRoomChange = jest.fn();

    render(
      <EditTimetableForm
        room=""
        time=""
        duration=""
        onRoomChange={onRoomChange}
        onTimeChange={jest.fn()}
        onDurationChange={jest.fn()}
        mockClassroom={mockClassroom}
        mockStartTime={mockStartTime}
        mockDuration={mockDuration}
      />
    );

    fireEvent.click(screen.getByText('102'));

    expect(onRoomChange).toHaveBeenCalledWith('102');
  });

  it('calls onTimeChange when start time selected', () => {
    const onTimeChange = jest.fn();

    render(
      <EditTimetableForm
        room=""
        time=""
        duration=""
        onRoomChange={jest.fn()}
        onTimeChange={onTimeChange}
        onDurationChange={jest.fn()}
        mockClassroom={mockClassroom}
        mockStartTime={mockStartTime}
        mockDuration={mockDuration}
      />
    );

    fireEvent.click(screen.getByText('11:00'));

    expect(onTimeChange).toHaveBeenCalledWith('11:00');
  });

  it('calls onDurationChange when duration selected', () => {
    const onDurationChange = jest.fn();

    render(
      <EditTimetableForm
        room=""
        time=""
        duration=""
        onRoomChange={jest.fn()}
        onTimeChange={jest.fn()}
        onDurationChange={onDurationChange}
        mockClassroom={mockClassroom}
        mockStartTime={mockStartTime}
        mockDuration={mockDuration}
      />
    );

    fireEvent.click(screen.getByText('2:00'));

    expect(onDurationChange).toHaveBeenCalledWith('2:00');
  });
});
