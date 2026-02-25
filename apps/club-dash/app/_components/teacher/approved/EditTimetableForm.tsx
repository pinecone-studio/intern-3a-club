import {
  Label,
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@intern-3a-club/shadcn';

type EditTimetableFormProps = {
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

export const EditTimetableForm = ({
  room,
  time,
  duration,
  onRoomChange,
  onTimeChange,
  onDurationChange,
  mockClassroom,
  mockStartTime,
  mockDuration,
}: EditTimetableFormProps) => (
  <div className="space-y-4 mt-4">
    <div>
      <Label>Room</Label>
      <Select value={room} onValueChange={onRoomChange}>
        <SelectTrigger>
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
    <div>
      <Label>Start</Label>
      <Select value={time} onValueChange={onTimeChange}>
        <SelectTrigger>
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
    <div>
      <Label>Duration</Label>
      <Select value={duration} onValueChange={onDurationChange}>
        <SelectTrigger>
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
);
