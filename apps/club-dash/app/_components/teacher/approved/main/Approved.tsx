import { Calendar, Clock, ChevronDown, Trash2 } from 'lucide-react';
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
  Button,
  Checkbox,
} from '@intern-3a-club/shadcn';
import {
  DELETE_CLUB,
  DeleteClubData,
  GET_ALL_APPROVED_CLUBS,
  GET_ALL_CLUBS,
  getAllTimetablesFromData,
} from '../../../../../libs/club-queries';

const ScheduleItem = ({
  schedule,
}: {
  schedule: {
    date: string;
    room: string;
    clubStartTime: string;
    duration: number;
  };
}) => (
  <div className="p-3 w-6xl rounded-xl bg-white/[0.02] border border-black/5 flex justify-between items-center hover:bg-gray-100 transition-colors">
    <Checkbox />
    <div className="flex gap-10">
      <div className="flex gap-4 text-xs">
        <span className="text-xs">Date:</span>
        <span className="text-xs font-semibold">{schedule.date}</span>
      </div>
      <div className="flex gap-4 text-xs">
        <span className="text-xs">Room:</span>
        <span className="text-xs font-semibold">{schedule.room}</span>
      </div>
      <div className="flex gap-4 text-xs">
        <span className="text-xs">Time:</span>
        <span className="font-semibold">{schedule.clubStartTime}</span>
      </div>
      <div className="flex gap-4 text-xs">
        <span className="text-xs">Duration:</span>
        <span className="text-xs font-semibold">{schedule.duration} min</span>
      </div>
    </div>
    <div className="flex gap-6">
      <Button variant="outline" size="sm">
        Edit
      </Button>
      <Button variant="destructive" size="sm">
        <Trash2 size={12} />
      </Button>
    </div>
  </div>
);

const StudentList = ({ open }: { open: boolean }) => (
  <>
    {open && (
      <div className="left-0 top-12 ml-3 z-20 w-[260px] h-fit bg-inherit p-3">
        <div className="grid grid-cols-5 gap-x-[100px] gap-y-2">
          {MockStudents.slice(0, 10).map((student) => (
            <div key={student.id} className="text-sm text-foreground/70 py-1">
              {student.studentCode}
            </div>
          ))}
        </div>
      </div>
    )}
  </>
);

const ScheduleList = ({
  open,
  timetables,
}: {
  open: boolean;
  timetables: {
    date: string;
    room: string;
    clubStartTime: string;
    duration: number;
  }[];
}) => (
  <>
    {open && (
      <div className="flex flex-col gap-4 w-[872px]">
        <div className="flex justify-end">
          <p className="text-red-600 hover:cursor-pointer text-xs hover:text-red-800">
            Delete Only Selected
          </p>
        </div>
        {timetables.map((schedule, index) => (
          <ScheduleItem key={index} schedule={schedule} />
        ))}
      </div>
    )}
  </>
);

const DeleteDialog = ({
  isDeleting,
  onConfirm,
}: {
  isDeleting: boolean;
  onConfirm: () => void;
}) => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <button
        disabled={isDeleting}
        className="flex-1 py-2 rounded-2xl bg-secondary border border-border text-foreground/70 font-semibold uppercase text-xs hover:bg-red-500 hover:text-white"
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
        <AlertDialogAction onClick={onConfirm}>Устгах</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export const ApprovedClubDetail = ({
  club,
  onDelete,
}: ApprovedClubDetailProps) => {
  const display = getDetailDisplay(club);
  const { data } = useQuery<Data>(GET_ALL_CLUBS);
  const allTimetables = useMemo(() => getAllTimetablesFromData(data), [data]);
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const [openStudentList, setOpenStudentList] = useState<boolean>(true);
  const [openScheduleList, setOpenScheduleList] = useState<boolean>(false);
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
  const handleStudentListToggle = () => setOpenStudentList((list) => !list);

  const handleToggleStudentList = () => setOpenStudentList((list) => !list);
  const handleToggleScheduleList = () => setOpenScheduleList((list) => !list);

  return (
    <div>
      <div className="flex flex-col gap-6">
        <div className="space-y-4 pt-4">
          <div className="flex justify-evenly gap-3">
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

        <div className="w-fit flex flex-col gap-4 pt-4 relative h-fit">
          <button
            onClick={handleToggleStudentList}
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
          <StudentList open={openStudentList} />
        </div>

        <div className="w-fit flex flex-col gap-4 pt-4 relative h-fit">
          <button
            onClick={handleToggleScheduleList}
            className="flex items-center gap-2 text-left"
          >
            <ChevronDown
              size={14}
              className={`transition-transform duration-200 ${
                openScheduleList ? 'rotate-180' : ''
              }`}
            />
            <p className="whitespace-nowrap">
              See Schedules ({display.timetables.length})
            </p>
          </button>
          <ScheduleList
            open={openScheduleList}
            timetables={display.timetables}
          />
        </div>

        <div className="flex items-end gap-3">
          <button
            onClick={handleOpenEdit}
            className="flex-1 py-2 rounded-2xl bg-foreground text-background font-semibold uppercase text-xs hover:bg-gray-300 hover:text-black"
          >
            Edit
          </button>
          <DeleteDialog
            isDeleting={isDeleting}
            onConfirm={handleDeleteConfirm}
          />
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
