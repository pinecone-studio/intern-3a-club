'use client';

import { useState } from 'react';
import { Club } from '../../../../libs/types';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  ScrollArea,
  Separator,
} from '@intern-3a-club/shadcn';
import { PendingModalItem } from './PendingModalItem';

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

  const renderPendingItem = (club: Club) => (
    <PendingModalItem
      key={club.id}
      club={club}
      selectedTeacherId={selectedTeacher[club.id]}
      onTeacherChange={handleTeacherChange}
      onReject={onReject}
      onApprove={onApprove}
    />
  );

  return (
    <Dialog open onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-lg p-0 gap-0 overflow-hidden">
        <DialogHeader className="px-6 pt-6 pb-4">
          <DialogTitle className="text-base font-semibold tracking-tight">
            Pending Requests
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            {pending.length} club{pending.length !== 1 ? 's' : ''} awaiting
            review
          </DialogDescription>
        </DialogHeader>

        <Separator />

        <ScrollArea className="max-h-[60vh]">
          <div className="divide-y divide-border">
            {pending.map(renderPendingItem)}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
