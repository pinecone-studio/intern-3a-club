import { Calendar, Clock, ChevronDown } from 'lucide-react';
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
  DELETE_CLUB,
  DeleteClubData,
  GET_ALL_APPROVED_CLUBS,
  GET_ALL_CLUBS,
  getAllTimetablesFromData,
} from '../../../../../libs/club-queries';
import { StudentList } from './StudentList';
import { ScheduleList } from './ScheduleList';
import { DeleteDialog } from './DeleteDialog';

// ✅ Төвөгшлийг багасгахын тулд "Эвхэгддэг хэсэг"-ийг тусад нь компонент болгов
const CollapsibleSection = ({
  title,
  isOpen,
  onToggle,
  children,
}: {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) => (
  <div className="w-fit flex flex-col gap-4 pt-4 relative h-fit">
    <button onClick={onToggle} className="flex items-center gap-2 text-left">
      <ChevronDown
        size={14}
        className={`transition-transform duration-200 ${
          isOpen ? 'rotate-180' : ''
        }`}
      />
      <p className="whitespace-nowrap">{title}</p>
    </button>
    {children}
  </div>
);

export const ApprovedClubDetail = ({
  club,
  onDelete,
}: ApprovedClubDetailProps) => {
  const display = getDetailDisplay(club);
  const { data } = useQuery<Data>(GET_ALL_CLUBS);
  const allTimetables = useMemo(() => getAllTimetablesFromData(data), [data]);

  const [openEdit, setOpenEdit] = useState(false);
  const [openStudentList, setOpenStudentList] = useState(true);
  const [openScheduleList, setOpenScheduleList] = useState(false);

  const primaryTimetable = club.timetables?.[0] ?? null;

  const [deleteClub, { loading: isDeleting }] = useMutation<DeleteClubData>(
    DELETE_CLUB,
    {
      refetchQueries: [{ query: GET_ALL_APPROVED_CLUBS }],
      awaitRefetchQueries: true,
      onError: (e) => alert(e.message),
    }
  );

  const handleDeleteConfirm = async () => {
    await deleteClub({ variables: { id: club.id } });
    onDelete?.(club);
  };

  const handleOpenEdit = () => {
    if (!primaryTimetable) return alert('Timetable байхгүй байна');
    setOpenEdit(true);
  };

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

        {/* ✅ Салгасан компонентуудыг ашигласнаар ApprovedClubDetail-ийн complexity эрс багасна */}
        <CollapsibleSection
          title={`Joined Students (${MockStudents.length})`}
          isOpen={openStudentList}
          onToggle={() => setOpenStudentList(!openStudentList)}
        >
          <StudentList open={openStudentList} />
        </CollapsibleSection>

        <CollapsibleSection
          title={`See Schedules (${display.timetables.length})`}
          isOpen={openScheduleList}
          onToggle={() => setOpenScheduleList(!openScheduleList)}
        >
          <ScheduleList
            open={openScheduleList}
            timetables={display.timetables}
          />
        </CollapsibleSection>

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
        onClose={() => setOpenEdit(false)}
        timetables={club.timetables}
        mockClassroom={mockClassroom}
        mockStartTime={mockStartTime}
        mockDuration={mockDuration}
        allTimetables={allTimetables}
      />
    </div>
  );
};
