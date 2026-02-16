'use client';
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
} from '@intern-3a-club/shadcn';
import React from 'react';
import {
  Frequency,
  ClassRoom,
  Duration,
  StartTime,
  Teachers,
} from './_components';
import { useCreateClubState } from '../_hooks/use-createclub-states';
const CreateClub = () => {
  const { state, setters, handlers } = useCreateClubState();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      name: state.clubName,
      teacher: state.teacherName,
      description: state.clubDesc,
      startDate: state.clubStartDate,
      frequency: state.clubFrequency,
      classRoom: state.clubClassRoom,
      startTime: state.clubStartTime,
      duration: state.clubDuration,
      minStudents: state.clubMinStudent,
      maxStudents: state.clubMaxStudent,
    };
    console.log('Шинэ клубын мэдээлэл:', payload);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-secondary border p-6 rounded-2xl text-xs font-black uppercase"
        >
          Клуб нээх
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Шинэ клуб нээх</DialogTitle>
            <DialogDescription className="sr-only">
              Шинэ клуб нээх формын мэдээллийг бөглөнө үү.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="clubName">Клубын нэр</Label>
              <Textarea
                id="clubName"
                placeholder="Клубын нэр"
                value={state.clubName}
                onChange={handlers.handleName}
              />
            </div>
            <Teachers
              teacherName={state.teacherName}
              setTeacherName={setters.setTeacherName}
            />
            <div className="flex flex-col gap-2">
              <Label htmlFor="description">Клубын зорилго</Label>
              <Textarea
                id="description"
                placeholder="Клубын зорилго"
                value={state.clubDesc}
                onChange={handlers.handleDesc}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <Label className="text-sm font-semibold">Клубын хуваарь</Label>
                <Calendar
                  mode="single"
                  className="rounded-lg border"
                  selected={state.clubStartDate}
                  onSelect={setters.setClubStartDate}
                />
              </div>
              <div className="flex flex-col gap-4">
                <Frequency
                  clubFrequency={state.clubFrequency}
                  setClubFrequency={setters.setClubFrequency}
                />
                <div className="flex justify-between gap-5">
                  <ClassRoom
                    clubClassRoom={state.clubClassRoom}
                    setClubClassRoom={setters.setClubClassRoom}
                  />
                  <StartTime
                    clubStartTime={state.clubStartTime}
                    setClubStartTime={setters.setClubStartTime}
                  />
                </div>
                <Duration
                  clubDuration={state.clubDuration}
                  setClubDuration={setters.setClubDuration}
                />
                <div className="space-y-2">
                  <Label className="text-sm font-semibold">Сурагчдын тоо</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-1">
                      <span className="text-[10px] text-muted-foreground uppercase">
                        Макс
                      </span>
                      <Input
                        id="max-students"
                        type="number"
                        placeholder="20"
                        value={state.clubMaxStudent}
                        onChange={handlers.handleMax}
                      />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] text-muted-foreground uppercase">
                        Мин
                      </span>
                      <Input
                        id="min-students"
                        type="number"
                        placeholder="5"
                        value={state.clubMinStudent}
                        onChange={handlers.handleMin}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" className="bg-black text-white">
              Create Club
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
export default CreateClub;
