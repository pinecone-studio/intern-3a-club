'use client';

import { useEffect, useState } from 'react';
import { Club } from '../../../../libs/types';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
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

  useEffect(() => {
    if (pending.length === 0) {
      setOpenModal(false);
    }
  }, [pending.length, setOpenModal]);

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
      <SheetContent className="sm:max-w-md h-[96vh] border rounded-md p-0 pb-4 gap-0 overflow-hidden flex flex-col">
        <SheetHeader className="px-6 pt-6 pb-4">
          <SheetTitle className="text-base font-semibold tracking-tight">
            Pending Requests
          </SheetTitle>

          <SheetDescription className="text-sm text-muted-foreground overflow-y-auto">
            {pending.length} club{pending.length !== 1 ? 's' : ''} awaiting
            review
          </SheetDescription>
        </SheetHeader>

        <ScrollArea className="flex-1 overflow-y-auto">
          <div className="space-y-3">{pending.map(renderPendingItem)}</div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
