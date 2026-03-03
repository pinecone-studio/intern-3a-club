import { Calendar, DoorOpen, Users2, Clock } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client/react';
import { DetailTile } from '../main/DetailTile';
import { ApprovedClubDetailProps, Timetable } from '../../../../libs/types';
import { EditTimetableDialog } from './EditTimetableDialog';
import {
  getDetailDisplay,
  mockClassroom,
  mockDuration,
  mockStartTime,
} from './approved-utils';
import {
  DeleteClubDocument,
  GetAllClubsDocument,
  GetAllClubsQuery,
} from '../../../_hooks/generated/graphql';

const DELETE_CLUB = DeleteClubDocument;
export const GET_ALL_CLUBS = GetAllClubsDocument;

type QueryTimetable = NonNullable<
  NonNullable<GetAllClubsQuery['getAllClubs'][number]['timetables']>[number]
>;

const toTimetable = (t: QueryTimetable): Timetable => ({
  id: t.id,
  clubId: t.clubId,
  date: t.date,
  room: t.room,
  clubStartTime: t.clubStartTime,
  duration: t.duration,
});

function getAllTimetablesFromData(data: GetAllClubsQuery | undefined): Timetable[] {
  const clubs = data?.getAllClubs ?? [];
  return clubs.flatMap((c) =>
    (c.timetables ?? [])
      .filter((t): t is QueryTimetable => t !== null)
      .map(toTimetable)
  );
}

export const ApprovedClubDetail = ({
  club,
  onDelete,
}: ApprovedClubDetailProps) => {
  const display = getDetailDisplay(club);
  const { data } = useQuery(GET_ALL_CLUBS);
  const allTimetables = useMemo(() => getAllTimetablesFromData(data), [data]);
  const [openEdit, setOpenEdit] = useState(false);
  const primaryTimetable = club.timetables?.[0] ?? null;

  const [deleteClub, { loading: isDeleting }] = useMutation(DELETE_CLUB, {
    refetchQueries: [{ query: GET_ALL_CLUBS }],
    onCompleted: () => {
      alert('Клуб амжилттай устгагдлаа.');
    },
    onError: (e) => alert(e.message),
  });

  const handleDeleteClick = async () => {
    if (window.confirm('Та энэ клубыг устгахдаа итгэлтэй байна уу?')) {
      await deleteClub({ variables: { id: club.id } });
      onDelete?.(club);
    }
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
    <>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">{display.description}</p>

          <div className="grid grid-cols-2 gap-3">
            <DetailTile
              icon={<Clock size={14} />}
              label="Schedule"
              value={display.startTime}
            />
            <DetailTile
              icon={<DoorOpen size={14} />}
              label="Room"
              value={display.room}
            />
            <DetailTile
              icon={<Users2 size={14} />}
              label="Members"
              value={display.members}
            />
            <DetailTile
              icon={<Calendar size={14} />}
              label="Status"
              value={display.status}
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

          <button
            onClick={handleDeleteClick}
            disabled={isDeleting}
            className="flex-1 py-2 rounded-2xl bg-secondary border border-border text-foreground/70 font-black uppercase text-xs"
          >
            {isDeleting ? 'Deleting...' : 'Delete'}
          </button>
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
    </>
  );
};
