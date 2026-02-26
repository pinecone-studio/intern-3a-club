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
  Label,
  Button,
} from '@intern-3a-club/shadcn';
import React from 'react';
import { Teachers, CreatedTimetable } from './_components';
import { useCreateClubState } from '../_hooks/use-createclub-states';
import { useCreateClubMutation } from '../_hooks/use-create-club';

const CreateClub = () => {
  const { state, setters, handlers } = useCreateClubState();
  const { handleSubmit, loading } = useCreateClubMutation(state);
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
          <div className="space-y-4 py-4">
            <div className="flex justify-between items-end gap-3">
              <div className="flex flex-col gap-2 w-80">
                <Label htmlFor="clubName">Клубын нэр</Label>
                <Textarea
                  rows={1}
                  className="min-h-0 h-[40px] py-1"
                  id="clubName"
                  placeholder="Клубын нэр"
                  value={state.clubName}
                  onChange={handlers.handleName}
                />
              </div>
              <Teachers
                teacherId={state.teacherId}
                setTeacherId={setters.setTeacherId}
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="description">Клубын зорилго</Label>
              <Textarea
                id="description"
                placeholder="Клубын зорилго"
                value={state.clubDesc}
                onChange={handlers.handleDesc}
              />
            </div>

            <CreatedTimetable
              state={state}
              setters={setters}
              handlers={handlers}
            />
          </div>
          <DialogFooter>
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
  );
};
export default CreateClub;
