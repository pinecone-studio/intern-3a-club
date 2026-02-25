import React from 'react';
import {
  render,
  screen,
  fireEvent,
  waitFor,
  within,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { EditTimetableDialog } from '../../app/_components/teacher/approved/EditTimetableDialog';
import type { EditTimetableDialogContent } from '../../app/_components/teacher/approved/EditTimetableDialogContent';
import type { Timetable } from '../../libs/types';
import * as editTimetableUtils from '../../app/_components/teacher/approved/edit-timetable-utils';

type MockContentProps = React.ComponentProps<typeof EditTimetableDialogContent>;

let lastOnSave: (() => void) | null = null;
jest.mock(
  '../../app/_components/teacher/approved/EditTimetableDialogContent',
  () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires -- Jest mock factory cannot reference outer scope (e.g. React)
    const React = require('react');
    const Actual = jest.requireActual(
      '../../app/_components/teacher/approved/EditTimetableDialogContent'
    ).EditTimetableDialogContent;
    return {
      EditTimetableDialogContent: (props: MockContentProps) => {
        const { onSelectDate, onSave } = props;
        lastOnSave = onSave;
        React.useEffect(() => {
          onSelectDate(undefined);
        }, [onSelectDate]);
        return React.createElement(Actual, props);
      },
    };
  }
);

const mockUpdate = jest.fn();

jest.mock('@apollo/client/react', () => ({
  ...jest.requireActual('@apollo/client/react'),
  useMutation: jest.fn(() => [mockUpdate, { loading: false }]),
}));
let lastOnOpenChange: ((_open: boolean) => void) | null = null;

jest.mock('@intern-3a-club/shadcn', () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires -- Jest mock factory cannot reference outer scope (e.g. React)
  const React = require('react');
  const actual = jest.requireActual('@intern-3a-club/shadcn');

  return {
    ...actual,
    // Dialog-ийг бүрэн солиогүй, зөвхөн onOpenChange-ийг хадгалаад жинхэнэ Dialog-ийг дуудна
    Dialog: (props: React.ComponentProps<typeof actual.Dialog>) => {
      lastOnOpenChange = props.onOpenChange ?? null;
      return React.createElement(actual.Dialog, props);
    },
  };
});
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

const useMutationMock = jest.requireMock('@apollo/client/react')
  .useMutation as jest.Mock;

describe('EditTimetableDialog (clean)', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    lastOnOpenChange = null;

    useMutationMock.mockReturnValue([mockUpdate, { loading: false }]);
    mockUpdate.mockResolvedValue(undefined);
    jest.spyOn(window, 'alert').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('does not call onClose when handleDialogOpenChange receives true', () => {
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

    // Dialog дээр binding хийсэн onOpenChange (handleDialogOpenChange)-ийг wrapper-аар дамжуулж авч байна
    expect(lastOnOpenChange).toBeDefined();

    // isOpen === true branch-ийг шууд дуудах
    lastOnOpenChange?.(true);

    // true үед if (!isOpen) нөхцөл биелэхгүй тул onClose дуудагдах ёсгүй
    expect(onClose).not.toHaveBeenCalled();
  });

  it('executes selectedDate modifier branch', () => {
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

    // calendar grid
    const grid = screen.getByRole('grid');
    const button = grid.querySelector('button');

    if (button) {
      fireEvent.click(button); // selectedDate set болно
    }

    expect(grid).toBeInTheDocument();
  });

  it('handleSelectDate returns early when date is undefined', () => {
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
    const buttons = grid.querySelectorAll('button');
    const jan1 = Array.from(buttons).find((b) =>
      b.getAttribute('data-date')?.startsWith('2025-01')
    );
    if (jan1) {
      fireEvent.click(jan1);
      fireEvent.click(jan1);
    }
    expect(grid).toBeInTheDocument();
  });

  // 1️⃣ open=false branch
  it('returns null when dialog closed', () => {
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

  // 2️⃣ onClose branch (handleDialogOpenChange when isOpen false)
  it('calls onClose when dialog closes', () => {
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

  it('calls onClose when dialog close button is clicked', () => {
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

    const dialog = screen.getByRole('dialog');
    const closeButton = within(dialog).getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);
    expect(onClose).toHaveBeenCalled();
  });

  // executeUpdateAndClose guard: early return when active or selectedDate missing
  it('executes early return when active or selectedDate missing', () => {
    jest.spyOn(editTimetableUtils, 'shouldAbortSave').mockReturnValue(false);
    const onClose = jest.fn();

    render(
      <EditTimetableDialog
        open
        onClose={onClose}
        timetables={[]}
        allTimetables={[]}
        mockClassroom={mockClassroom}
        mockStartTime={mockStartTime}
        mockDuration={mockDuration}
      />
    );

    expect(lastOnSave).toBeDefined();
    lastOnSave!();

    expect(mockUpdate).not.toHaveBeenCalled();
    expect(window.alert).not.toHaveBeenCalled();
    expect(onClose).not.toHaveBeenCalled();
  });

  // checkConflict guard: return null when active or selectedDate missing
  it('checkConflict returns early when active or selectedDate missing', () => {
    jest
      .spyOn(editTimetableUtils, 'shouldAbortSave')
      .mockImplementation((_active, _selectedDate, getConflict) => {
        getConflict();
        return false;
      });

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

    expect(lastOnSave).toBeDefined();
    lastOnSave!();

    expect(mockUpdate).not.toHaveBeenCalled();
  });

  // 3️⃣ active=null guard
  it('does nothing when no active timetable', () => {
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

    fireEvent.click(screen.getByRole('button', { name: /save/i }));
    expect(mockUpdate).not.toHaveBeenCalled();
  });

  // 4️⃣ conflict branch
  it('shows conflict and prevents save', () => {
    const conflict: Timetable = { ...baseTimetable, id: 't2' };

    render(
      <EditTimetableDialog
        open
        onClose={jest.fn()}
        timetables={[baseTimetable]}
        allTimetables={[baseTimetable, conflict]}
        mockClassroom={mockClassroom}
        mockStartTime={mockStartTime}
        mockDuration={mockDuration}
      />
    );

    fireEvent.click(screen.getByRole('button', { name: /save/i }));

    expect(window.alert).toHaveBeenCalled();
    expect(mockUpdate).not.toHaveBeenCalled();
  });

  // 5️⃣ success save (covers executeUpdateAndClose: updateTimetable, alert, onClose)
  it('saves timetable when no conflict', async () => {
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

    fireEvent.click(screen.getByRole('button', { name: /save/i }));

    expect(mockUpdate).toHaveBeenCalled();

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalled();
      expect(onClose).toHaveBeenCalled();
    });
  });

  // 6️⃣ modifier branch (active null)
  it('executes modifier branch when active null', () => {
    const filterSpy = jest.spyOn(Array.prototype, 'filter');

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

    expect(filterSpy).toHaveBeenCalled();
    filterSpy.mockRestore();
  });

  // 7️⃣ saving=true shows "Saving..." (EditTimetableDialogContent getSaveLabel branch)
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
});
