/* eslint-disable max-lines */
import {
  DialogFooter,
  AlertDialogTrigger,
  AlertDialog,
  AlertDialogDescription,
  AlertDialogContent,
  AlertDialogAction,
  AlertDialogTitle,
  AlertDialogHeader,
  AlertDialogCancel,
  AlertDialogFooter,
  Calendar,
  Button,
  Label,
  Select,
  SelectTrigger,
  SelectItem,
  SelectValue,
  SelectContent,
} from '@intern-3a-club/shadcn';

type CalendarSectionProps = {
  selectedDate: Date | undefined;
  onSelectDate: (_d?: Date) => void;
  highlighted: Date[];
  conflictDates: Date[];
  selectedEditDates: Date[];
};

type FormSectionProps = {
  room: string;
  time: string;
  duration: string;
  onRoomChange: (_v: string) => void;
  onTimeChange: (_v: string) => void;
  onDurationChange: (_v: string) => void;
  mockClassroom: { id: string; classRoom: string }[];
  mockStartTime: { id: string; startTime: string }[];
  mockDuration: { id: string; duration: string }[];
};

type FooterSectionProps = {
  active: import('../../../../../libs/types').Timetable | null;
  saving: boolean;
  saveLabel: string;
  onSave: () => void;
  onDelete?: () => void;
  deleting?: boolean;
};

export const EditTimetableCalendarSection = ({
  selectedDate,
  onSelectDate,
  highlighted,
  conflictDates,
  selectedEditDates,
}: CalendarSectionProps) => (
  <div className="border-t border-b bg-muted/30 px-6 py-4 flex justify-center">
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
      className="p-0"
    />
  </div>
);

export const EditTimetableFormSection = ({
  room,
  time,
  duration,
  onRoomChange,
  onTimeChange,
  onDurationChange,
  mockClassroom,
  mockStartTime,
  mockDuration,
}: FormSectionProps) => (
  <div className="px-6 py-5">
    <div className="grid grid-cols-3 gap-3">
      <div className="flex flex-col gap-1.5">
        <Label className="text-xs text-muted-foreground">Room</Label>
        <Select value={room} onValueChange={onRoomChange}>
          <SelectTrigger className="h-9 text-sm">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {mockClassroom.map((c) => (
              <SelectItem key={c.id} value={c.classRoom}>
                {c.classRoom}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label className="text-xs text-muted-foreground">Start</Label>
        <Select value={time} onValueChange={onTimeChange}>
          <SelectTrigger className="h-9 text-sm">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {mockStartTime.map((s) => (
              <SelectItem key={s.id} value={s.startTime}>
                {s.startTime}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label className="text-xs text-muted-foreground">Duration</Label>
        <Select value={duration} onValueChange={onDurationChange}>
          <SelectTrigger className="h-9 text-sm">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {mockDuration.map((d) => (
              <SelectItem key={d.id} value={d.duration}>
                {d.duration}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  </div>
);

export const EditTimetableFooterSection = ({
  active,
  saving,
  saveLabel,
  onSave,
  onDelete,
  deleting,
}: FooterSectionProps) => (
  <DialogFooter className="border-t px-6 py-4 flex justify-between gap-2">
    {/* Delete товч */}
    {onDelete && (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            variant="destructive"
            size="sm"
            disabled={!active || deleting}
          >
            {deleting ? 'Устгаж байна...' : 'Устгах'}
          </Button>
        </AlertDialogTrigger>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Хуваарь устгах уу?</AlertDialogTitle>
            <AlertDialogDescription>
              Та энэ хуваарийг устгахдаа итгэлтэй байна уу?
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>Цуцлах</AlertDialogCancel>
            <AlertDialogAction onClick={onDelete} disabled={deleting}>
              Тийм, устгах
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )}

    {/* Save товч (одоо байгаа логик) */}
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="w-full" size="sm" disabled={!active || saving}>
          {saveLabel}
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Хуваарь хадгалах уу?</AlertDialogTitle>
          <AlertDialogDescription>
            Та энэ хуваарийг хадгалахдаа итгэлтэй байна уу?
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Цуцлах</AlertDialogCancel>
          <AlertDialogAction onClick={onSave} disabled={saving}>
            {saving ? 'Saving...' : 'Хадгалах'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  </DialogFooter>
);
