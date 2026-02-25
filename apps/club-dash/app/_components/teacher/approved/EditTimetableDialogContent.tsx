import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Calendar,
  Button,
} from '@intern-3a-club/shadcn';
import { EditTimetableForm } from './EditTimetableForm';

type EditTimetableDialogContentProps = {
  selectedDate: Date | undefined;
  onSelectDate: (_d?: Date) => void;
  highlighted: Date[];
  conflictDates: Date[];
  active: import('../../../../libs/types').Timetable | null;
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
};

function toSelectedEditDates(d: Date | undefined): Date[] {
  return d === undefined ? [] : [d];
}

function getSaveLabel(saving: boolean): string {
  return saving ? 'Saving...' : 'Save';
}

type FormSectionProps = Pick<
  EditTimetableDialogContentProps,
  | 'active'
  | 'room'
  | 'time'
  | 'duration'
  | 'onRoomChange'
  | 'onTimeChange'
  | 'onDurationChange'
  | 'mockClassroom'
  | 'mockStartTime'
  | 'mockDuration'
>;

const FormSection = (props: FormSectionProps) => {
  const { active, ...formProps } = props;
  if (!active) return null;
  return <EditTimetableForm {...formProps} />;
};

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
}: EditTimetableDialogContentProps) => {
  const selectedEditDates = toSelectedEditDates(selectedDate);
  const saveLabel = getSaveLabel(saving);
  return (
    <DialogContent className="bg-white max-w-md">
      <DialogHeader>
        <DialogTitle>Schedule edit</DialogTitle>
        <DialogDescription className="sr-only">
          Select a date and edit room, start time, and duration for the schedule.
        </DialogDescription>
      </DialogHeader>
      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={onSelectDate}
        modifiers={{
          highlighted,
          selectedEdit: selectedEditDates,
          conflict: conflictDates,
        }}
        modifiersClassNames={{
          highlighted: 'bg-black text-white',
          selectedEdit: 'bg-green-300 text-white',
          conflict: 'bg-red-600 text-white',
        }}
      />
      <FormSection
        active={active}
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
      <DialogFooter>
        <Button
          onClick={onSave}
          disabled={!active || saving}
          className="w-full bg-blue-600 text-white"
        >
          {saveLabel}
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};
