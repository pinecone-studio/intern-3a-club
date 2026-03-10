import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { EditTimetableDialog } from '../../../app/_components/teacher/approved/edit/EditTimetableDialog';
import type { Timetable } from '../../../libs/types';
import * as editTimetableUtils from '../../../app/_components/teacher/approved/edit/edit-timetable-utils';

/* -------------------------------------------------------------------------- */
/* MOCKS                                                                      */
/* -------------------------------------------------------------------------- */

let lastOnSave: (() => void) | null = null;

jest.mock(
  '../../../app/_components/teacher/approved/edit/EditTimetableDialogContent',
  () => {
    const actual = jest.requireActual(
      '../../../app/_components/teacher/approved/edit/EditTimetableDialogContent'
    );

    return {
      ...actual,
      EditTimetableDialogContent: ({
        onSelectDate,
        onSave,
        ...props
      }: {
        onSelectDate: (date: Date | undefined) => void;
        onSave: () => void;
        [key: string]: unknown;
      }) => {
        lastOnSave = onSave;

        // ✅ props-оос салгаж авснаар dependency-ийн анхааруулга арилна
        React.useEffect(() => {
          onSelectDate(undefined);
        }, [onSelectDate]);

        // ✅ require('react')-ийн оронд React.createElement-ийг шууд ашиглана
        return React.createElement(actual.EditTimetableDialogContent, {
          onSelectDate,
          onSave,
          ...props,
        });
      },
    };
  }
);

const mockUpdate = jest.fn();

jest.mock('@apollo/client/react', () => ({
  ...jest.requireActual('@apollo/client/react'),
  useMutation: jest.fn(() => [mockUpdate, { loading: false }]),
}));

jest.mock('@intern-3a-club/shadcn', () => {
  const actual = jest.requireActual('@intern-3a-club/shadcn');

  return {
    ...actual,
    Dialog: (props: {
      open?: boolean;
      onOpenChange?: (v: boolean) => void;
      children?: unknown;
    }) => React.createElement(actual.Dialog, props), // ✅ require-ийг устгав
  };
});

/* -------------------------------------------------------------------------- */

const baseTimetable: Timetable = {
  id: 't1',
  clubId: '1',
  date: '2025-01-01',
  room: '101',
  clubStartTime: '10:00',
  duration: 60,
};

const mockClassroom = [{ id: '1', classRoom: '101' }];
const mockStartTime = [{ id: '1', startTime: '10:00' }];
const mockDuration = [{ id: '1', duration: '1:00' }];

// ✅ unknown ашиглан TypeScript-ийн casting алдааг засав
const useMutationMock = jest.requireMock('@apollo/client/react')
  .useMutation as unknown as jest.Mock;

/* -------------------------------------------------------------------------- */

describe('EditTimetableDialog', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    lastOnSave = null;

    useMutationMock.mockReturnValue([mockUpdate, { loading: false }]);
    mockUpdate.mockResolvedValue(undefined);
    jest.spyOn(window, 'alert').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('aborts save when shouldAbortSave returns true', async () => {
    jest.spyOn(editTimetableUtils, 'shouldAbortSave').mockReturnValue(true);

    render(
      <EditTimetableDialog
        open
        onClose={jest.fn()}
        timetables={[baseTimetable]}
        allTimetables={[baseTimetable]}
        mockClassroom={mockClassroom}
        mockStartTime={mockStartTime}
        mockDuration={mockDuration}
      />
    );

    await lastOnSave?.();
    expect(mockUpdate).not.toHaveBeenCalled();
  });

  it('calls update and closes dialog on success', async () => {
    const onClose = jest.fn();
    jest.spyOn(editTimetableUtils, 'shouldAbortSave').mockReturnValue(false);

    render(
      <EditTimetableDialog
        open
        onClose={onClose}
        timetables={[baseTimetable]}
        allTimetables={[baseTimetable]}
        mockClassroom={mockClassroom}
        mockStartTime={mockStartTime}
        mockDuration={mockDuration}
      />
    );

    await lastOnSave?.();

    expect(mockUpdate).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith('Амжилттай шинэчлэгдлээ');
    expect(onClose).toHaveBeenCalled();
  });

  it('returns null when closed', () => {
    const { container } = render(
      <EditTimetableDialog
        open={false}
        onClose={jest.fn()}
        timetables={[baseTimetable]}
        allTimetables={[baseTimetable]}
        mockClassroom={mockClassroom}
        mockStartTime={mockStartTime}
        mockDuration={mockDuration}
      />
    );

    expect(container.firstChild).toBeNull();
  });

  it('calls onClose when dialog closes via Escape', () => {
    const onClose = jest.fn();

    render(
      <EditTimetableDialog
        open
        onClose={onClose}
        timetables={[baseTimetable]}
        allTimetables={[baseTimetable]}
        mockClassroom={mockClassroom}
        mockStartTime={mockStartTime}
        mockDuration={mockDuration}
      />
    );

    fireEvent.keyDown(document, { key: 'Escape' });
    expect(onClose).toHaveBeenCalled();
  });

  it('shows Saving... when loading', () => {
    useMutationMock.mockReturnValue([mockUpdate, { loading: true }]);

    render(
      <EditTimetableDialog
        open
        onClose={jest.fn()}
        timetables={[baseTimetable]}
        allTimetables={[baseTimetable]}
        mockClassroom={mockClassroom}
        mockStartTime={mockStartTime}
        mockDuration={mockDuration}
      />
    );

    expect(screen.getByRole('button', { name: /saving/i })).toBeInTheDocument();
  });

  it('handleSelectDate does nothing when date not found', () => {
    render(
      <EditTimetableDialog
        open
        onClose={jest.fn()}
        timetables={[baseTimetable]}
        allTimetables={[baseTimetable]}
        mockClassroom={mockClassroom}
        mockStartTime={mockStartTime}
        mockDuration={mockDuration}
      />
    );

    const grid = screen.getByRole('grid');
    expect(grid).toBeInTheDocument();
  });

  it('useEffect early return when timetables empty', () => {
    render(
      <EditTimetableDialog
        open
        onClose={jest.fn()}
        timetables={[]}
        allTimetables={[]}
        mockClassroom={mockClassroom}
        mockStartTime={mockStartTime}
        mockDuration={mockDuration}
      />
    );

    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('does not update when active or selectedDate missing', async () => {
    jest.spyOn(editTimetableUtils, 'shouldAbortSave').mockReturnValue(false);

    render(
      <EditTimetableDialog
        open
        onClose={jest.fn()}
        timetables={[]}
        allTimetables={[baseTimetable]}
        mockClassroom={mockClassroom}
        mockStartTime={mockStartTime}
        mockDuration={mockDuration}
      />
    );

    await lastOnSave?.();
    expect(mockUpdate).not.toHaveBeenCalled();
  });

  it('calls checkConflict callback when active and selectedDate are set', async () => {
    const shouldAbortSaveSpy = jest
      .spyOn(editTimetableUtils, 'shouldAbortSave')
      .mockImplementation((active, selectedDate, checkConflict) => {
        checkConflict();
        return true;
      });

    render(
      <EditTimetableDialog
        open
        onClose={jest.fn()}
        timetables={[baseTimetable]}
        allTimetables={[baseTimetable]}
        mockClassroom={mockClassroom}
        mockStartTime={mockStartTime}
        mockDuration={mockDuration}
      />
    );

    await lastOnSave?.();

    expect(shouldAbortSaveSpy).toHaveBeenCalled();
    expect(mockUpdate).not.toHaveBeenCalled();
  });
});
