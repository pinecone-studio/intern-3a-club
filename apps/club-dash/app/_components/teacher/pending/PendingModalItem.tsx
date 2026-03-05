import { Clock, DoorOpen, Users, Check, X } from 'lucide-react';
import { Club, GetAllTeacher } from '../../../../libs/types';
import {
  Button,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  AlertDialogTitle,
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogHeader,
  AlertDialogDescription,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
  ScrollArea,
} from '@intern-3a-club/shadcn';

type PendingModalItemProps = {
  club: Club;
  selectedTeacherId: string | undefined;
  onTeacherChange: (_clubId: string, _value: string) => void;
  onReject: (_club: Club) => void;
  onApprove: (_club: Club, _teacherId: string) => void;
  teachers: GetAllTeacher[];
};

const getPrimaryTimetable = (club: Club) => club.timetables?.[0];

const getMembersLabel = (club: Club) =>
  `${club.minMember ?? '-'}-${club.maxMember ?? '-'}`;

// eslint-disable-next-line complexity,react/function-component-definition
export const PendingModalItem = ({
  club,
  selectedTeacherId,
  onTeacherChange,
  onReject,
  onApprove,
  teachers,
}: PendingModalItemProps) => {
  const primary = getPrimaryTimetable(club);
  const schedule = primary?.clubStartTime ?? '-';
  const room = primary?.room ?? '-';
  const membersLabel = getMembersLabel(club);

  const handleTeacherChange = (value: string) => {
    onTeacherChange(club.id, value);
  };

  const handleReject = () => {
    onReject(club);
  };

  const handleApprove = () => {
    if (!selectedTeacherId) return;
    onApprove(club, selectedTeacherId);
  };

  return (
    <ScrollArea>
      <div className="px-4">
        <div className="rounded-md border border-border bg-card p-4">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-3">
            <div className="min-w-0 flex-1">
              <h3 className="text-sm font-semibold text-foreground leading-tight">
                {club.name}
              </h3>

              {club.description && (
                <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                  {club.description}
                </p>
              )}
            </div>

            {/* <Badge
              variant="outline"
              className="shrink-0 text-[10px] text-amber-600 border-amber-200 bg-amber-50"
            >
              Pending
            </Badge> */}
          </div>

          {/* Info */}
          <div className="flex flex-wrap items-center gap-4 mb-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Clock size={16} />
              {schedule}
            </span>

            <span className="flex items-center gap-1.5">
              <DoorOpen size={16} />
              Room {room}
            </span>

            <span className="flex items-center gap-1.5">
              <Users size={16} />
              {membersLabel}
            </span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Select
              value={selectedTeacherId}
              onValueChange={handleTeacherChange}
            >
              <SelectTrigger className="h-8 text-xs flex-1">
                <SelectValue placeholder="Assign teacher" />
              </SelectTrigger>

              <SelectContent>
                {(club.preferredTeachers ?? []).map((teacherId) => {
                  const teacher = teachers.find((t) => t.id === teacherId);
                  if (!teacher) return null;
                  return (
                    <SelectItem key={teacherId} value={teacherId}>
                      {teacher.firstName} {teacher.lastName}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>

            {/* Reject */}
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="h-8 px-3 text-xs text-destructive border-destructive/20 hover:text-destructive hover:bg-destructive/10"
                >
                  <X className="size-3 mr-1" />
                  Reject
                </Button>
              </AlertDialogTrigger>

              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Клубыг татгалзах уу?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Та энэ клубын хүсэлтийг татгалзахдаа итгэлтэй байна уу?
                  </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                  <AlertDialogCancel>Цуцлах</AlertDialogCancel>

                  <AlertDialogAction
                    onClick={handleReject}
                    className="bg-destructive text-destructive-foreground"
                  >
                    Татгалзах
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            {/* Approve */}
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  type="button"
                  size="sm"
                  disabled={!selectedTeacherId}
                  className="h-8 px-3 text-xs disabled:opacity-40"
                >
                  <Check className="size-3 mr-1" />
                  Approve
                </Button>
              </AlertDialogTrigger>

              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Клубыг батлах уу?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Та энэ клубыг сонгосон багштай батлахдаа итгэлтэй байна уу?
                  </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                  <AlertDialogCancel>Цуцлах</AlertDialogCancel>
                  <AlertDialogAction onClick={handleApprove}>
                    Батлах
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};
