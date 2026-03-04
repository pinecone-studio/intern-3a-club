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
  Button,
} from '@intern-3a-club/shadcn';
import React from 'react';
import { CreatedTimetable } from './_components';
import { useCreateClubErrorForm } from '../_hooks/use-create-club-errorform';
import { ClubFormFields } from './_components/ClubErrorFormFields';

export default function CreateClub() {
  const {
    open,
    setOpen,
    errors,
    state,
    setters,
    handlers,
    loading,
    onSubmit,
    handleNameChange,
    handleDescChange,
    handleTeacherChange,
  } = useCreateClubErrorForm();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-secondary border p-6 rounded-2xl text-xs font-black uppercase"
        >
          Клуб нээх
        </Button>
      </DialogTrigger>
      <DialogContent
        className="max-w-2xl block overscroll-y-auto"
        style={{ scrollbarWidth: 'none' }}
      >
        <form onSubmit={onSubmit}>
          <DialogHeader>
            <DialogTitle>Шинэ клуб нээх</DialogTitle>
            <DialogDescription className="sr-only">
              Шинэ клуб нээх формын мэдээллийг бөглөнө үү.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <ClubFormFields
              clubName={state.clubName}
              clubDesc={state.clubDesc}
              teacherId={state.teacherId}
              clubNameError={errors.clubName}
              teacherIdError={errors.teacherId}
              clubDescError={errors.clubDesc}
              onNameChange={handleNameChange}
              onDescChange={handleDescChange}
              onTeacherChange={handleTeacherChange}
            />
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
}
