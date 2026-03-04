import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@intern-3a-club/shadcn';
import {
  EditTimetableCalendarSection,
  EditTimetableFormSection,
  EditTimetableFooterSection,
} from './EditTimetableSections';
type EditTimetableDialogContentProps = {
  selectedDate: Date | undefined;
  onSelectDate: (_d?: Date) => void;
  highlighted: Date[];
  conflictDates: Date[];
  active: import('../../../../../libs/types').Timetable | null;
  room: string;
  time: string;
  duration: string;
  onRoomChange: (_v: string) => void;
  onTimeChange: (_v: string) => void;
  onDurationChange: (_v: string) => void;
  mockClassroom: { id: string; classRoom: string }[];
  mockStartTime: { id: string; startTime: string }[];
  mockDuration: { id: string; duration: string }[];
  onSave: () => void;
  saving: boolean;
  onDelete?: () => void;
  deleting?: boolean;
};

function toSelectedEditDates(d: Date | undefined): Date[] {
  return d === undefined ? [] : [d];
}

function getSaveLabel(saving: boolean): string {
  return saving ? 'Saving...' : 'Save';
}
export const EditTimetableDialogContent = ({
  selectedDate,
  onSelectDate,
  highlighted,
  conflictDates,
  active,
  room,
  time,
  duration,
  onRoomChange,
  onTimeChange,
  onDurationChange,
  mockClassroom,
  mockStartTime,
  mockDuration,
  onSave,
  saving,
  onDelete,
  deleting,
}: EditTimetableDialogContentProps) => {
  const selectedEditDates = toSelectedEditDates(selectedDate);
  const saveLabel = getSaveLabel(saving);
  return (
    <DialogContent className="sm:max-w-md gap-0 p-0 overflow-hidden">
      <DialogHeader className="px-6 pt-6 pb-4">
        <DialogTitle className="text-base">Schedule edit</DialogTitle>
        <DialogDescription className="text-xs text-muted-foreground">
          Select a date and edit room, start time, and duration.
        </DialogDescription>
      </DialogHeader>

      <EditTimetableCalendarSection
        selectedDate={selectedDate}
        onSelectDate={onSelectDate}
        highlighted={highlighted}
        conflictDates={conflictDates}
        selectedEditDates={selectedEditDates}
      />

      <EditTimetableFormSection
        room={room}
        time={time}
        duration={duration}
        onRoomChange={onRoomChange}
        onTimeChange={onTimeChange}
        onDurationChange={onDurationChange}
        mockClassroom={mockClassroom}
        mockStartTime={mockStartTime}
        mockDuration={mockDuration}
      />

      <EditTimetableFooterSection
        active={active}
        saving={saving}
        saveLabel={saveLabel}
        onSave={onSave}
        onDelete={onDelete}
        deleting={deleting}
      />
    </DialogContent>
  );
};
