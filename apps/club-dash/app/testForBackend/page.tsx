'use client';

import React, { useState } from 'react';
import { gql } from '@apollo/client';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Textarea,
  Input,
  Label,
  Calendar,
  Button,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@intern-3a-club/shadcn';
import { useMutation, useQuery } from '@apollo/client/react';

export type Data = {
  getAllClubs: GetAllClub[];
};

export type GetAllClub = {
  id: string;
  name: string;
  description: string;
  creatorId: any;
  teacherId: string;
  type: string;
  status: string;
  preferredTeachers: any;
  minMember: number;
  maxMember: number;
  timetables: Timetable[];
};
export type Timetable = {
  id: string;
  clubId: string;
  date: string;
  room: string;
  clubStartTime: string;
  duration: number;
};

type DeleteClubData = {
  deleteClub: string;
};
export const GET_ALL_CLUBS = gql`
  query GetAllClubs {
    getAllClubs {
      id
      name
      description
      creatorId
      teacherId
      type
      status
      preferredTeachers
      minMember
      maxMember
      timetables {
        id
        clubId
        date
        room
        clubStartTime
        duration
      }
    }
  }
`;
// --- GRAPHQL MUTATION ---
const CREATE_CLUB_WITH_SCHEDULE = gql`
  mutation CreateClubWithSchedules(
    $input: CreateClubInput!
    $startDate: String!
    $classroom: String!
    $startTime: String!
    $duration: Int!
    $frequency: String!
    $selectedDays: [String!]
  ) {
    createClubWithSchedules(
      input: $input
      startDate: $startDate
      classroom: $classroom
      startTime: $startTime
      duration: $duration
      frequency: $frequency
      selectedDays: $selectedDays
    ) {
      id
      name
    }
  }
`;

const DELETE_CLUB = gql`
  mutation DeleteClub($id: ID!) {
    deleteClub(id: $id)
  }
`;

// --- MOCK DATA ---
const mockTeachers = [
  { id: '1', name: 'Erdenetsogt' },
  { id: '2', name: 'Narantsatsralt' },
  { id: '3', name: 'Bilguundul' },
  { id: '4', name: 'Elbeg' },
];

const mockFrequency = [
  { id: '1', label: 'Зөвхөн сонгосон өдрүүдэд', value: 'ONCE' },
  { id: '2', label: 'Долоо хоног бүр', value: 'WEEKLY' },
  { id: '3', label: '2 долоо хоног тутам', value: 'BIWEEKLY' },
  { id: '4', label: 'Сар бүр', value: 'MONTHLY' },
];

const mockWeekdays = [
  { id: '1', day: 'M', value: 'MONDAY' },
  { id: '2', day: 'T', value: 'TUESDAY' },
  { id: '3', day: 'W', value: 'WEDNESDAY' },
  { id: '4', day: 'T', value: 'THURSDAY' },
  { id: '5', day: 'F', value: 'FRIDAY' },
  { id: '6', day: 'S', value: 'SATURDAY' },
  { id: '7', day: 'S', value: 'SUNDAY' },
];

const mockClassroom = [
  { id: '1', classRoom: '301' },
  { id: '2', classRoom: '302' },
  { id: '3', classRoom: '303' },
  { id: '4', classRoom: '304' },
  { id: '5', classRoom: '305' },
];

const mockStartTime = [
  { id: '1', startTime: '13:00' },
  { id: '2', startTime: '14:00' },
  { id: '3', startTime: '15:00' },
  { id: '4', startTime: '16:00' },
  { id: '5', startTime: '17:00' },
];

const mockDuration = [
  { id: '1', duration: '1:00' },
  { id: '2', duration: '1:30' },
  { id: '3', duration: '2:00' },
];

// --- MAIN COMPONENT ---
export default function CreateClubPage() {
  const [clubName, setClubName] = useState('');
  const [teacherId, setTeacherId] = useState('');
  const [clubDesc, setClubDesc] = useState('');
  const [clubStartDate, setClubStartDate] = useState<Date | undefined>(
    new Date()
  );
  const [clubFrequency, setClubFrequency] = useState('ONCE');
  const [selectedFreqId, setSelectedFreqId] = useState('1');
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [clubClassRoom, setClubClassRoom] = useState('301');
  const [clubStartTime, setClubStartTime] = useState('13:00');
  const [clubDuration, setClubDuration] = useState('1:00');
  const [clubMaxStudent, setClubMaxStudent] = useState('20');
  const [clubMinStudent, setClubMinStudent] = useState('5');
  console.log({ clubName });
  console.log({ teacherId });
  console.log({ clubDesc });
  console.log({ clubStartDate });
  console.log({ clubFrequency });
  console.log({ selectedFreqId });
  console.log({ selectedDays });
  console.log({ clubClassRoom });
  console.log({ clubStartTime });
  console.log({ clubDuration });
  console.log({ clubMaxStudent });
  console.log({ clubMinStudent });

  // APOLLO MUTATION
  const [createClub, { loading }] = useMutation(CREATE_CLUB_WITH_SCHEDULE, {
    refetchQueries: [{ query: GET_ALL_CLUBS }],
  });

  const [deleteClub, { loading: isDeleting }] = useMutation<DeleteClubData>(
    DELETE_CLUB,
    {
      refetchQueries: [{ query: GET_ALL_CLUBS }],
      onCompleted: (data) => {
        alert('Клуб амжилттай устгагдлаа.');
        console.log('Устсан клубын ID:', data.deleteClub);
      },
      onError: (error) => alert(`Алдаа гарлаа: ${error.message}`),
    }
  );

  const {
    loading: isLoading,
    error: err,
    data,
  } = useQuery<Data>(GET_ALL_CLUBS);

  console.log({ data });

  const handleToggleDay = (id: string) => {
    setSelectedDays((prev) =>
      prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clubStartDate) return alert('Огноо сонгоно уу');

    const durationInMinutes = (val: string) => {
      const [hours, minutes] = val.split(':').map(Number);
      return hours * 60 + (minutes || 0);
    };

    const formattedDays = selectedDays
      .map((id) => mockWeekdays.find((d) => d.id === id)?.value)
      .filter(Boolean);

    try {
      await createClub({
        variables: {
          input: {
            name: clubName,
            description: clubDesc,
            teacherId: teacherId,
            type: 'mentor',
            minMember: parseInt(clubMinStudent),
            maxMember: parseInt(clubMaxStudent),
          },
          startDate: clubStartDate.toISOString().split('T')[0],
          classroom: clubClassRoom,
          startTime: clubStartTime,
          duration: durationInMinutes(clubDuration),
          frequency: clubFrequency,
          selectedDays: formattedDays,
        },
      });
      alert('Амжилттай үүсгэлээ!');
    } catch (error) {
      console.error(error);
      alert('Алдаа гарлаа');
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Та энэ клубыг устгахдаа итгэлтэй байна уу?')) {
      await deleteClub({ variables: { id } });
    }
  };

  if (isLoading) return <div>Уншиж байна...</div>;
  if (err) return <div>Алдаа гарлаа: {err.message}</div>;

  return (
    <div className="flex flex-col gap-10 p-10">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="bg-secondary border p-6 rounded-2xl text-xs font-black uppercase"
          >
            Клуб нээх
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl bg-white">
          <form onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle>Шинэ клуб нээх</DialogTitle>
              <DialogDescription className="sr-only">
                Формыг бөглөнө үү.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6 py-4">
              {/* Клубын нэр */}
              <div className="flex flex-col gap-2">
                <Label>Клубын нэр</Label>
                <Textarea
                  placeholder="Клубын нэр"
                  value={clubName}
                  onChange={(e) => setClubName(e.target.value)}
                />
              </div>

              {/* Багш сонгох */}
              <div className="flex flex-col gap-2">
                <Label>Хариуцсан багш</Label>
                <Select onValueChange={setTeacherId} value={teacherId}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Сонгох" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    {mockTeachers.map((t) => (
                      <SelectItem key={t.id} value={t.id}>
                        {t.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Зорилго */}
              <div className="flex flex-col gap-2">
                <Label>Клубын зорилго</Label>
                <Textarea
                  placeholder="Зорилго"
                  value={clubDesc}
                  onChange={(e) => setClubDesc(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Зүүн тал: Календарь ба Давтамж */}
                <div className="flex flex-col gap-4">
                  <Label className="font-semibold">Клубын хуваарь</Label>
                  <Calendar
                    mode="single"
                    selected={clubStartDate}
                    onSelect={setClubStartDate}
                    className="rounded-lg border shadow-sm"
                  />

                  <div className="space-y-3">
                    <Label>Давтамж</Label>
                    <Select
                      onValueChange={(id) => {
                        setSelectedFreqId(id);
                        const selected = mockFrequency.find((f) => f.id === id);
                        if (selected) {
                          setClubFrequency(selected.value);
                        }
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Давтамж сонгох" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        {mockFrequency.map((f) => (
                          <SelectItem key={f.id} value={f.id}>
                            {f.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    {selectedFreqId !== '1' && (
                      <div className="flex gap-1 flex-wrap">
                        {mockWeekdays.map((day) => (
                          <Button
                            type="button"
                            key={day.id}
                            onClick={() => handleToggleDay(day.id)}
                            className={`w-9 h-9 rounded-full border ${
                              selectedDays.includes(day.id)
                                ? 'bg-black text-white'
                                : 'bg-white text-black hover:bg-gray-100'
                            }`}
                          >
                            {day.day}
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Баруун тал: Анги, Цаг, Оюутны тоо */}
                <div className="flex flex-col gap-6">
                  <div className="flex gap-4">
                    <div className="flex-1 space-y-2">
                      <Label>Орох Анги</Label>
                      <Select
                        onValueChange={setClubClassRoom}
                        value={clubClassRoom}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          {mockClassroom.map((c) => (
                            <SelectItem key={c.id} value={c.classRoom}>
                              {c.classRoom}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex-1 space-y-2">
                      <Label>Эхлэх цаг</Label>
                      <Select
                        onValueChange={setClubStartTime}
                        value={clubStartTime}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          {mockStartTime.map((s) => (
                            <SelectItem key={s.id} value={s.startTime}>
                              {s.startTime}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Үргэлжлэх хугацаа</Label>
                    <Select
                      onValueChange={setClubDuration}
                      value={clubDuration}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        {mockDuration.map((d) => (
                          <SelectItem key={d.id} value={d.duration}>
                            {d.duration} цаг
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label>Сурагчдын тоо</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <span className="text-[10px] uppercase text-gray-500">
                          Max
                        </span>
                        <Input
                          type="number"
                          value={clubMaxStudent}
                          onChange={(e) => setClubMaxStudent(e.target.value)}
                        />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] uppercase text-gray-500">
                          Min
                        </span>
                        <Input
                          type="number"
                          value={clubMinStudent}
                          onChange={(e) => setClubMinStudent(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <DialogFooter className="mt-6">
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button
                type="submit"
                className="bg-black text-white px-8"
                disabled={loading}
              >
                {loading ? 'Creating...' : 'Create Club'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <div className="flex flex-col gap-8">
        {data?.getAllClubs.map((club) => (
          <div className="border rounded-md p-6" key={club.id}>
            <div>{club.id}</div>
            <div>{club.name}</div>
            <div>{club.description}</div>
            <div>{club.creatorId}</div>
            <div>{club.teacherId}</div>
            <div>{club.preferredTeachers}</div>
            <div>{club.type}</div>
            <div>{club.status}</div>
            <div>{club.minMember}</div>
            <div>{club.maxMember}</div>
            <div className="flex flex-col gap-2 p-4">
              {club.timetables.map((schedule) => (
                <div key={schedule.id} className="bg-red-50">
                  <div>{schedule.id}</div>
                  <div>{schedule.clubId}</div>
                  <div>{schedule.date}</div>
                  <div>{schedule.room}</div>
                  <div>{schedule.clubStartTime}</div>
                  <div>{schedule.duration}</div>
                </div>
              ))}
            </div>
            <Button onClick={() => handleDelete(club.id)} disabled={isDeleting}>
              {isDeleting ? 'Deleting...' : 'Delete Club'}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
