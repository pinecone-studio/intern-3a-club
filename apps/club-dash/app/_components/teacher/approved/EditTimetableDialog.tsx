// 'use client';

// import { useEffect, useState } from 'react';
// import { useMutation } from '@apollo/client/react';
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogFooter,
//   Calendar,
//   Label,
//   Select,
//   SelectTrigger,
//   SelectContent,
//   SelectItem,
//   SelectValue,
//   Button,
// } from '@intern-3a-club/shadcn';

// import { UPDATE_TIMETABLE } from './timetable.mutations';
// import {
//   parseDateString,
//   formatDate,
//   durationInMinutes,
//   formatDuration,
// } from './utils';

// export type Timetable = {
//   id: string;
//   clubId: string;
//   date: string;
//   room: string;
//   clubStartTime: string;
//   duration: number;
// };

// type Props = {
//   open: boolean;
//   onClose: () => void;
//   timetable: Timetable | null;
//   mockClassroom: { id: string; classRoom: string }[];
//   mockStartTime: { id: string; startTime: string }[];
//   mockDuration: { id: string; duration: string }[];
// };

// export default function EditTimetableDialog({
//   open,
//   onClose,
//   timetable,
//   mockClassroom,
//   mockStartTime,
//   mockDuration,
// }: Props) {
//   const [date, setDate] = useState<Date>();
//   const [room, setRoom] = useState('');
//   const [time, setTime] = useState('');
//   const [duration, setDuration] = useState('');

//   const [updateTimetable, { loading }] = useMutation(UPDATE_TIMETABLE);

//   // Populate form when timetable changes
//   useEffect(() => {
//     if (!open || !timetable) return;

//     setDate(parseDateString(timetable.date));
//     setRoom(timetable.room);
//     setTime(timetable.clubStartTime);
//     setDuration(formatDuration(timetable.duration));
//   }, [open, timetable?.id]);

//   // Reset state when dialog closes
//   useEffect(() => {
//     if (!open) {
//       setDate(undefined);
//       setRoom('');
//       setTime('');
//       setDuration('');
//     }
//   }, [open]);

//   const handleSave = async () => {
//     if (!timetable) return;
//     if (!date || !room || !time || !duration) {
//       alert('Бүх талбарыг бөглөнө үү');
//       return;
//     }

//     try {
//       await updateTimetable({
//         variables: {
//           input: {
//             id: timetable.id,
//             date: formatDate(date),
//             room,
//             clubStartTime: time,
//             duration: durationInMinutes(duration),
//           },
//         },
//       });

//       alert('Амжилттай шинэчлэгдлээ!');
//       onClose();
//     } catch (error: any) {
//       alert(`Алдаа гарлаа: ${error.message}`);
//     }
//   };

//   return (
//     <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
//       <DialogContent className="bg-white max-w-md">
//         <DialogHeader>
//           <DialogTitle>Хуваарь засах</DialogTitle>
//         </DialogHeader>

//         <div className="space-y-4">
//           <div>
//             <Label>Өдөр</Label>
//             <Calendar mode="single" selected={date} onSelect={setDate} />
//           </div>

//           <div>
//             <Label>Өрөө</Label>
//             <Select value={room} onValueChange={setRoom}>
//               <SelectTrigger>
//                 <SelectValue placeholder="Сонгох" />
//               </SelectTrigger>
//               <SelectContent>
//                 {mockClassroom.map((c) => (
//                   <SelectItem key={c.id} value={c.classRoom}>
//                     {c.classRoom}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>

//           <div>
//             <Label>Эхлэх цаг</Label>
//             <Select value={time} onValueChange={setTime}>
//               <SelectTrigger>
//                 <SelectValue placeholder="Сонгох" />
//               </SelectTrigger>
//               <SelectContent>
//                 {mockStartTime.map((s) => (
//                   <SelectItem key={s.id} value={s.startTime}>
//                     {s.startTime}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>

//           <div>
//             <Label>Үргэлжлэх хугацаа</Label>
//             <Select value={duration} onValueChange={setDuration}>
//               <SelectTrigger>
//                 <SelectValue placeholder="Сонгох" />
//               </SelectTrigger>
//               <SelectContent>
//                 {mockDuration.map((d) => (
//                   <SelectItem key={d.id} value={d.duration}>
//                     {d.duration}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>
//         </div>

//         <DialogFooter>
//           <Button
//             onClick={handleSave}
//             disabled={loading}
//             className="flex-1 py-2 rounded-2xl bg-foreground text-background font-bold text-xs"
//           >
//             {loading ? 'Хадгалж байна...' : 'Edit'}
//           </Button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   );
// }

'use client';

import { useEffect, useState, useMemo } from 'react';
import { gql } from '@apollo/client';
import { useMutation } from '@apollo/client/react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  Calendar,
  Label,
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
  Button,
} from '@intern-3a-club/shadcn';

export type Timetable = {
  id: string;
  clubId: string;
  date: string;
  room: string;
  clubStartTime: string;
  duration: number;
};

const UPDATE_TIMETABLE = gql`
  mutation UpdateTimetable($input: UpdateTimetableInput!) {
    updateTimetable(input: $input) {
      id
      date
      room
      clubStartTime
      duration
    }
  }
`;

const parseDate = (d: string) => {
  const [y, m, day] = d.split('-').map(Number);
  return new Date(y, m - 1, day);
};

const formatDate = (date: Date) => date.toISOString().split('T')[0];

const mins = (v: string) => {
  const [h, m] = v.split(':').map(Number);
  return h * 60 + (m || 0);
};

const fmt = (m: number) => {
  const h = Math.floor(m / 60);
  const mm = m % 60;
  return `${h}:${mm === 0 ? '00' : mm}`;
};

type Props = {
  open: boolean;
  onClose: () => void;
  timetables: Timetable[];
  mockClassroom: { id: string; classRoom: string }[];
  mockStartTime: { id: string; startTime: string }[];
  mockDuration: { id: string; duration: string }[];
};

export default function EditTimetableDialog({
  open,
  onClose,
  timetables,
  mockClassroom,
  mockStartTime,
  mockDuration,
}: Props) {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [active, setActive] = useState<Timetable | null>(null);

  const [room, setRoom] = useState('');
  const [time, setTime] = useState('');
  const [duration, setDuration] = useState('');

  const [updateTimetable, { loading }] = useMutation(UPDATE_TIMETABLE);

  /* --- highlighted days --- */
  const highlighted = useMemo(() => {
    return timetables.map((t) => parseDate(t.date));
  }, [timetables]);

  /* --- when date clicked --- */
  const handleSelectDate = (d?: Date) => {
    if (!d) return;

    setSelectedDate(d);

    const found = timetables.find(
      (t) => formatDate(parseDate(t.date)) === formatDate(d)
    );

    if (found) {
      // тухайн өдөр timetable байгаа
      setActive(found);
      setRoom(found.room);
      setTime(found.clubStartTime);
      setDuration(fmt(found.duration));
    } else {
      // timetable байхгүй → одоогийн active-г хадгална
      // зөвхөн date өөрчилнө
    }
  };
  /* open үед эхний timetable */
  useEffect(() => {
    if (!open || timetables.length === 0) return;
    handleSelectDate(parseDate(timetables[0].date));
  }, [open]);

  const handleSave = async () => {
    if (!active || !selectedDate) return;

    const newDateStr = formatDate(selectedDate);

    const conflict = timetables.find(
      (t) =>
        t.id !== active.id && t.date === newDateStr && t.clubStartTime === time
    );

    if (conflict) {
      alert('Энэ өдөр, энэ цагт аль хэдийн клуб байна.');
      return;
    }

    await updateTimetable({
      variables: {
        input: {
          id: active.id,
          date: newDateStr,
          room,
          clubStartTime: time,
          duration: mins(duration),
        },
      },
    });

    alert('Амжилттай шинэчлэгдлээ');
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="bg-white max-w-md">
        <DialogHeader>
          <DialogTitle>Schedule edit</DialogTitle>
        </DialogHeader>

        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={handleSelectDate}
          modifiers={{
            highlighted,
            selectedEdit: selectedDate ? [selectedDate] : [],
            conflict: selectedDate
              ? timetables
                  .filter(
                    (t) =>
                      t.id !== active?.id &&
                      t.date === formatDate(selectedDate) &&
                      t.clubStartTime === time
                  )
                  .map((t) => parseDate(t.date))
              : [],
          }}
          modifiersClassNames={{
            highlighted: 'bg-black text-white',
            selectedEdit: 'bg-green-300 text-white',
            conflict: 'bg-red-600 text-white',
          }}
        />

        {/* FORM */}
        {active && (
          <div className="space-y-4 mt-4">
            <div>
              <Label>Room</Label>
              <Select value={room} onValueChange={setRoom}>
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
              <Select value={time} onValueChange={setTime}>
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
              <Select value={duration} onValueChange={setDuration}>
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
        )}

        <DialogFooter>
          <Button
            onClick={handleSave}
            disabled={!active || loading}
            className="w-full bg-blue-600 text-white"
          >
            {loading ? 'Saving...' : 'Save'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
