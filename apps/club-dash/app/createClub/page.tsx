'use client';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import React, { useState } from 'react';
import {
  Frequency,
  ClassRoom,
  Duration,
  StartTime,
  Teachers,
} from './_components';
import { ClassTeacherType } from '@/lib/types';

const CreateClub = () => {
  const [clubName, setClubName] = useState<string>('');
  const [teacherName, setTeacherName] = useState<ClassTeacherType[]>([]);
  const [clubDesc, setClubDesc] = useState<string>('');
  const [clubStartDate, setClubStartDate] = useState<Date | undefined>();
  const [clubFrequency, setClubFrequency] = useState<string>('');
  const [clubClassRoom, setClubClassRoom] = useState<number>();
  const [clubStartTime, setClubStartTime] = useState<string>('');
  const [clubDuration, setClubDuration] = useState<string>('');
  const [clubMaxStudent, setClubMaxStudent] = useState<string>('');
  const [clubMinStudent, setClubMinStudent] = useState<string>('');
  console.log({
    clubStartDate,
    clubName,
    teacherName,
    clubDesc,
    clubMaxStudent,
    clubMinStudent,
  });
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
            </DialogHeader>
            <FieldGroup>
              <Field>
                <Label htmlFor="clubName">Клубын нэр</Label>
                <Textarea
                  placeholder="Клубын нэр"
                  value={clubName}
                  onChange={(e) => setClubName(e.target.value)}
                />
              </Field>
              <Teachers
                teacherName={teacherName}
                setTeacherName={setTeacherName}
              />
              <Field>
                <Label htmlFor="description">Клубын зорилго</Label>
                <Textarea
                  placeholder="Клубын зорилго"
                  value={clubDesc}
                  onChange={(e) => setClubDesc(e.target.value)}
                />
              </Field>
              <FieldGroup className="md:grid md:grid-cols-2">
                <Field>
                  <FieldLabel htmlFor="timetable">Клубын хуваарь</FieldLabel>
                  <Calendar
                    mode="single"
                    className="rounded-lg border"
                    onDayClick={(day) => {
                      setClubStartDate(day);
                    }}
                  />
                </Field>
                <Field>
                  <Frequency />
                  <div className="flex justify-between gap-5">
                    <ClassRoom />
                    <StartTime />
                  </div>
                  <Duration />
                  <FieldLabel htmlFor="studentNumber">Сурагчдын тоо</FieldLabel>
                  <Input
                    placeholder="Max: 20"
                    value={clubMaxStudent}
                    onChange={(e) => setClubMaxStudent(e.target.value)}
                  />
                  <Input
                    placeholder="Min"
                    value={clubMinStudent}
                    onChange={(e) => setClubMinStudent(e.target.value)}
                  />
                </Field>
              </FieldGroup>
            </FieldGroup>
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
