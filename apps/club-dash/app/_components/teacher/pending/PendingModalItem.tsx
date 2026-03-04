import { Clock, DoorOpen, Users, Check, X } from 'lucide-react';
import { Club } from '../../../../libs/types';
import {
  Button,
  Badge,
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
} from '@intern-3a-club/shadcn';

type PendingModalItemProps = {
  club: Club;
  selectedTeacherId: string | undefined;
  onTeacherChange: (_clubId: string, _value: string) => void;
  onReject: (_club: Club) => void;
  onApprove: (_club: Club, _teacherId: string) => void;
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
    <div className="px-6 py-5">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-semibold text-foreground leading-tight">
            {club.name}
          </h3>
          {club.description && (
            <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
              {club.description}
            </p>
          )}
        </div>
        <Badge
          variant="outline"
          className="text-[10px] shrink-0 text-amber-600 border-amber-200 bg-amber-50"
        >
          Pending
        </Badge>
      </div>

      <div className="flex items-center flex-wrap gap-4 text-xs text-muted-foreground mb-4">
        <span className="flex items-center gap-1.5">
          <Clock className="size-3.5" />
          {schedule}
        </span>
        <span className="flex items-center gap-1.5">
          <DoorOpen className="size-3.5" />
          Room {room}
        </span>
        <span className="flex items-center gap-1.5">
          <Users className="size-3.5" />
          {membersLabel}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <Select value={selectedTeacherId} onValueChange={handleTeacherChange}>
          <SelectTrigger className="h-8 text-xs flex-1">
            <SelectValue placeholder="Assign teacher" />
          </SelectTrigger>
          <SelectContent>
            {(club.preferredTeachers ?? []).map((t) => (
              <SelectItem key={t} value={t}>
                Teacher {t}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="h-8 px-3 text-xs text-destructive hover:text-destructive hover:bg-destructive/10 border-destructive/20"
            >
              <X className="size-4 mr-1" />
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
                className="bg-destructive text-destructive-foreground"
                onClick={handleReject}
              >
                Татгалзах
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              type="button"
              size="sm"
              disabled={!selectedTeacherId}
              className="h-8 px-3 text-xs disabled:opacity-40"
            >
              <Check className="size-3.5 mr-1" />
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
  );
};
