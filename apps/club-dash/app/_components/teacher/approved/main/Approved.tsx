import { Calendar, DoorOpen, Users2, Clock, ChevronDown } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client/react';
import { DetailTile } from '../../main/DetailTile';
import { ApprovedClubDetailProps, Data } from '../../../../../libs/types';
import { EditTimetableDialog } from '../edit/EditTimetableDialog';
import { MockStudents } from '../../../../../libs/mock';
import {
  getDetailDisplay,
  mockClassroom,
  mockDuration,
  mockStartTime,
} from './approved-utils';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from '@intern-3a-club/shadcn';
import {
  DELETE_CLUB,
  DeleteClubData,
  GET_ALL_APPROVED_CLUBS,
  GET_ALL_CLUBS,
  getAllTimetablesFromData,
} from '../../../../../libs/club-queries';

export const ApprovedClubDetail = ({
  club,
  onDelete,
}: ApprovedClubDetailProps) => {
  const display = getDetailDisplay(club);
  console.log({ display });
  const { data } = useQuery<Data>(GET_ALL_CLUBS);
  const allTimetables = useMemo(() => getAllTimetablesFromData(data), [data]);
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const [openStudentList, setOpenStudentList] = useState<boolean>(true);
  const primaryTimetable = club.timetables?.[0] ?? null;

  const [deleteClub, { loading: isDeleting }] = useMutation<DeleteClubData>(
    DELETE_CLUB,
    {
      refetchQueries: [{ query: GET_ALL_APPROVED_CLUBS }],
      awaitRefetchQueries: true,
      onCompleted: () => {},
      onError: (e) => alert(e.message),
    }
  );

  const handleDeleteConfirm = async () => {
    await deleteClub({ variables: { id: club.id } });
    onDelete?.(club);
  };

  const handleOpenEdit = () => {
    if (!primaryTimetable) {
      alert('Timetable байхгүй байна');
      return;
    }
    setOpenEdit(true);
  };

  const handleCloseEdit = () => setOpenEdit(false);

  return (
    <div className="flex items-start gap-80">
      <div className="w-fit flex flex-col gap-4 pt-4 relative">
        <button
          onClick={() => setOpenStudentList((list) => !list)}
          className="flex items-center gap-2 text-left"
        >
          <ChevronDown
            size={14}
            className={`transition-transform duration-200 ${
              openStudentList ? 'rotate-180' : ''
            }`}
          />
          <p className="whitespace-nowrap">
            Joined Students ({MockStudents.length})
          </p>
        </button>

        {openStudentList && (
          <div className="absolute left-0 top-12 ml-3 z-20 w-[260px] h-fit bg-inherit p-3">
            <div className="grid grid-cols-5 gap-x-[100px] gap-y-2">
              {MockStudents.slice(0, 10).map((student) => (
                <div
                  key={student.id}
                  className="text-sm text-foreground/70 py-1"
                >
                  {student.studentCode}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-6 ml-20">
        <div className="space-y-4 pt-4">
          <div className="flex flex-1 gap-3">
            <DetailTile
              icon={<Calendar size={14} />}
              label="Term"
              value={display.term}
            />
            <DetailTile
              icon={<Clock size={14} />}
              label="Duration"
              value={display.duration}
            />
            <DetailTile
              icon={<Clock size={14} />}
              label="Frequency"
              value={display.frequency}
            />
            <DetailTile
              icon={<Calendar size={14} />}
              label="Weekdays"
              value={display.days}
            />
          </div>
        </div>

        <div className="flex items-end gap-3">
          <button
            onClick={handleOpenEdit}
            className="flex-1 py-2 rounded-2xl bg-foreground text-background font-bold uppercase text-xs"
          >
            Edit
          </button>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button
                disabled={isDeleting}
                className="flex-1 py-2 rounded-2xl bg-secondary border border-border text-foreground/70 font-black uppercase text-xs"
              >
                {isDeleting ? 'Deleting...' : 'Delete'}
              </button>
            </AlertDialogTrigger>

            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Клуб устгах уу?</AlertDialogTitle>
                <AlertDialogDescription>
                  Та энэ клубыг устгахдаа итгэлтэй байна уу? Энэ үйлдлийг буцааж
                  болохгүй.
                </AlertDialogDescription>
              </AlertDialogHeader>

              <AlertDialogFooter>
                <AlertDialogCancel>Цуцлах</AlertDialogCancel>

                <AlertDialogAction onClick={handleDeleteConfirm}>
                  Устгах
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>

      <EditTimetableDialog
        open={openEdit}
        onClose={handleCloseEdit}
        timetables={club.timetables}
        mockClassroom={mockClassroom}
        mockStartTime={mockStartTime}
        mockDuration={mockDuration}
        allTimetables={allTimetables}
      />
    </div>
  );
};
