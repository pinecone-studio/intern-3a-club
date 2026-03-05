'use client';

import { useState } from 'react';
import { Club } from '../../../../libs/types';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  Separator,
  ScrollArea,
} from '@intern-3a-club/shadcn';
import { PendingModalItem } from './PendingModalItem';
import { useGetTeachers } from '../../../_hooks/use-get-teachers';

interface PendingModalProps {
  pending: Club[];
  setOpenModal: (_v: boolean) => void;
  onApprove: (_club: Club, _teacherId: string) => void;
  onReject: (_club: Club) => void;
}

export const PendingModal = ({
  pending,
  setOpenModal,
  onApprove,
  onReject,
}: PendingModalProps) => {
  const [selectedTeacher, setSelectedTeacher] = useState<
    Record<string, string>
  >({});

  const handleOpenChange = (open: boolean) => {
    if (!open) setOpenModal(false);
  };

  const handleTeacherChange = (clubId: string, value: string) => {
    setSelectedTeacher((prev) => ({
      ...prev,
      [clubId]: value,
    }));
  };
  const { data: teacherData } = useGetTeachers();
  const teachers = teacherData?.getAllTeachers ?? [];

  const renderPendingItem = (club: Club) => (
    <PendingModalItem
      key={club.id}
      club={club}
      selectedTeacherId={selectedTeacher[club.id]}
      onTeacherChange={handleTeacherChange}
      onReject={onReject}
      onApprove={onApprove}
      teachers={teachers}
    />
  );

  return (
    <Sheet open onOpenChange={handleOpenChange}>
      <SheetContent className="sm:max-w-lg p-0 gap-0 overflow-hidden flex flex-col">
        <SheetHeader className="px-6 pt-6 pb-4">
          <SheetTitle className="text-base font-semibold tracking-tight">
            Pending Requests
          </SheetTitle>

          <SheetDescription className="text-sm text-muted-foreground">
            {pending.length} club{pending.length !== 1 ? 's' : ''} awaiting
            review
          </SheetDescription>
        </SheetHeader>

        <Separator />

        <ScrollArea className="flex-1">
          <div className="divide-y divide-border">
            {pending.map(renderPendingItem)}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
