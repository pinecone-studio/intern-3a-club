import { Label } from '@intern-3a-club/shadcn';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@intern-3a-club/shadcn';
import React from 'react';

type ClassroomProps = {
  clubClassRoom: string;
  setClubClassRoom: (_v: string) => void;
};

const mockClassroom = [
  { id: '1', classRoom: '301' },
  { id: '2', classRoom: '302' },
  { id: '3', classRoom: '303' },
  { id: '4', classRoom: '304' },
  { id: '5', classRoom: '305' },
];

export const ClassRoom = ({
  clubClassRoom,
  setClubClassRoom,
}: ClassroomProps) => {
  const handleSelectClassroom = (selectedClassroomId: string) => {
    const selectedClassroom = mockClassroom.find(
      (classroom) => classroom.id === selectedClassroomId
    );
    if (selectedClassroom) {
      setClubClassRoom(selectedClassroom.classRoom);
    }
  };

  return (
    <div className="flex flex-col w-full gap-3">
      <Label
        htmlFor="classRoom"
        className="text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Орох Анги
      </Label>
      <Select
        onValueChange={handleSelectClassroom}
        value={mockClassroom.find((c) => c.classRoom === clubClassRoom)?.id}
      >
        <SelectTrigger id="classRoom" className="w-full max-w-48">
          <SelectValue placeholder="Сонгох" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          <SelectGroup>
            {mockClassroom.map((classroom) => (
              <SelectItem value={classroom.id} key={classroom.id}>
                {classroom.classRoom}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
