import { Calendar, DoorOpen, Users2, Clock } from 'lucide-react';
import { DetailTile } from '../main/DetailTile';
import { ApprovedClubDetailProps, Club } from '../../../../libs/types';
import { useMutation } from '@apollo/client/react';
import { gql } from '@apollo/client';
import { useState } from 'react';
import EditTimetableDialog from './EditTimetableDialog';

function getDescription(club: Club) {
  return club?.description ?? '';
}
function getStartTime(primary?: Club['timetables'][0]) {
  return primary?.clubStartTime ?? '-';
}
function getRoom(primary?: Club['timetables'][0]) {
  return primary?.room ?? '-';
}
function getMembers(club: Club) {
  return `${club?.minMember ?? 0} - ${club?.maxMember ?? 0}`;
}
function getDetailDisplay(club: Club) {
  const primary = club.timetables?.[0];
  return {
    description: getDescription(club),
    startTime: getStartTime(primary),
    room: getRoom(primary),
    members: getMembers(club),
    status: club?.status,
  };
}

const DELETE_CLUB = gql`
  mutation DeleteClub($id: ID!) {
    deleteClub(id: $id)
  }
`;

type DeleteClubData = {
  deleteClub: string;
};

export const GET_ALL_CLUBS = gql`
  query GetAllClubs {
    getAllClubs {
      id
      name
      description
      creatorId
      teacherId
      type
      status
      preferredTeachers
      minMember
      maxMember
      timetables {
        id
        clubId
        date
        room
        clubStartTime
        duration
      }
    }
  }
`;

/* --- edit dialog-д хэрэгтэй mock data --- */
const mockClassroom = [
  { id: '1', classRoom: '301' },
  { id: '2', classRoom: '302' },
  { id: '3', classRoom: '303' },
];

const mockStartTime = [
  { id: '1', startTime: '13:00' },
  { id: '2', startTime: '14:00' },
  { id: '3', startTime: '15:00' },
];

const mockDuration = [
  { id: '1', duration: '1:00' },
  { id: '2', duration: '1:30' },
  { id: '3', duration: '2:00' },
];

export const ApprovedClubDetail = ({
  club,
  onDelete,
}: ApprovedClubDetailProps) => {
  const display = getDetailDisplay(club);

  const [openEdit, setOpenEdit] = useState(false);
  const primaryTimetable = club.timetables?.[0] ?? null;

  const [deleteClub, { loading: isDeleting }] = useMutation<DeleteClubData>(
    DELETE_CLUB,
    {
      refetchQueries: [{ query: GET_ALL_CLUBS }],
      onCompleted: () => {
        alert('Клуб амжилттай устгагдлаа.');
      },
      onError: (e) => alert(e.message),
    }
  );

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

  console.log(primaryTimetable);
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
        onClose={() => setOpenEdit(false)}
        timetables={club.timetables}
        mockClassroom={mockClassroom}
        mockStartTime={mockStartTime}
        mockDuration={mockDuration}
      />
    </>
  );
};
