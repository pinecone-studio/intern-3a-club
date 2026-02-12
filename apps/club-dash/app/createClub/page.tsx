'use client';

import { Button } from '@intern-3a-club/shadcn';
import { Calendar } from '@intern-3a-club/shadcn';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@intern-3a-club/shadcn';
// import { Field, FieldGroup, FieldLabel } from '../../components/ui/field';
import { Input } from '@intern-3a-club/shadcn';
import { Label } from '@intern-3a-club/shadcn';
import { Textarea } from '@intern-3a-club/shadcn';
import React, { useState } from 'react';
import {
  Frequency,
  ClassRoom,
  Duration,
  StartTime,
  Teachers,
} from './_components';

const CreateClub = () => {
  const [clubName, setClubName] = useState<string>('');
  // const [teacherName, setTeacherName] = useState<ClassTeacherType[]>([]);
  const [clubDesc, setClubDesc] = useState<string>('');
  const [clubStartDate, setClubStartDate] = useState<Date | undefined>();
  // const [clubFrequency, setClubFrequency] = useState<string>('');
  // const [clubClassRoom, setClubClassRoom] = useState<number>();
  // const [clubStartTime, setClubStartTime] = useState<string>('');
  // const [clubDuration, setClubDuration] = useState<string>('');
  const [clubMaxStudent, setClubMaxStudent] = useState<string>('');
  const [clubMinStudent, setClubMinStudent] = useState<string>('');
  console.log({
    clubStartDate,
    clubName,
    // teacherName,
    clubDesc,
    clubMaxStudent,
    clubMinStudent,
  });
  const handleClubName = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setClubName(e.target.value);
  };
  const handleClubDesc = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setClubDesc(e.target.value);
  };
  const handleDayClick = (day: Date) => {
    setClubStartDate(day);
  };
  const handleClubMax = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setClubMaxStudent(e.target.value);
  };
  const handleClubMin = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setClubMinStudent(e.target.value);
  };
  return (
    <div className="bg-white w-screen h-screen flex justify-center items-center">
      <Dialog>
        <form>
          <DialogTrigger asChild>
            <Button variant={'outline'}>Клуб нээх</Button>
          </DialogTrigger>
          <DialogContent className="bg-white">
            <DialogHeader>
              <DialogTitle>Шинэ клуб нээх</DialogTitle>
              <DialogDescription className="sr-only">
                Шинэ клуб нээх формын мэдээллийг бөглөнө үү.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-6">
              <div className="flex flex-col gap-2">
                <Label htmlFor="clubName">Клубын нэр</Label>
                <Textarea
                  id="clubName"
                  placeholder="Клубын нэр"
                  value={clubName}
                  onChange={handleClubName}
                />
              </div>
              <Teachers
              // teacherName={teacherName}
              // setTeacherName={setTeacherName}
              />
              <div className="flex flex-col gap-2">
                <Label htmlFor="description">Клубын зорилго</Label>
                <Textarea
                  id="description"
                  placeholder="Клубын зорилго"
                  value={clubDesc}
                  onChange={handleClubDesc}
                />
              </div>
              <div className="space-y-6 md:grid md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label
                    htmlFor="timetable"
                    className="text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Клубын хуваарь
                  </Label>
                  <Calendar
                    mode="single"
                    className="rounded-lg border"
                    onDayClick={handleDayClick}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Frequency />
                  <div className="flex justify-between gap-5">
                    <ClassRoom />
                    <StartTime />
                  </div>
                  <Duration />
                  <Label
                    htmlFor="studentNumber"
                    className="text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Сурагчдын тоо
                  </Label>
                  <Input
                    placeholder="Max: 20"
                    value={clubMaxStudent}
                    onChange={handleClubMax}
                  />
                  <Input
                    placeholder="Min"
                    value={clubMinStudent}
                    onChange={handleClubMin}
                  />
                </div>
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button
                type="submit"
                variant={'outline'}
                className="bg-black text-white"
              >
                Create Club
              </Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
};

export default CreateClub;
