import { Calendar, DoorOpen, Users2, Clock } from 'lucide-react';
import { DetailTile } from '../main/DetailTile';
import { ApprovedClubDetailProps, Club } from '../../../../libs/types';
import { useMutation } from '@apollo/client/react';
import { gql } from '@apollo/client';

function getDescription(club: Club) {
  return club?.description ?? '';
}
function getStartTime(primary: Club['timetables'][0]) {
  return primary?.clubStartTime ?? '-';
}
function getRoom(primary: Club['timetables'][0]) {
  return primary?.room ?? '-';
}
function getMembers(club: Club) {
  return `${club?.minMember ?? 0} - ${club?.maxMember ?? 0}`;
}
function getDetailDisplay(club: Club) {
  const primary = club.timetables[0];
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

function onDeleteCompleted(data: DeleteClubData) {
  alert('Клуб амжилттай устгагдлаа.');
  console.log('Устсан клубын ID:', data.deleteClub);
}
function onDeleteError(error: Error) {
  alert(`Алдаа гарлаа: ${error.message}`);
}
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

export const ApprovedClubDetail = ({
  club,
  onEdit,
  onDelete,
}: ApprovedClubDetailProps) => {
  const display = getDetailDisplay(club);

  const handleEdit = () => {
    onEdit?.(club);
  };
  const [deleteClub, { loading: isDeleting }] = useMutation<DeleteClubData>(
    DELETE_CLUB,
    {
      refetchQueries: [{ query: GET_ALL_CLUBS }],
      onCompleted: onDeleteCompleted,
      onError: onDeleteError,
    }
  );
  const handleDelete = async (id: string) => {
    if (window.confirm('Та энэ клубыг устгахдаа итгэлтэй байна уу?')) {
      await deleteClub({ variables: { id } });
      onDelete?.(club);
    }
  };
  const handleDeleteClick = () => handleDelete(club.id);

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          {display.description}
        </p>

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
          onClick={handleEdit}
          className="flex-1 py-2 rounded-2xl bg-foreground text-background font-bold uppercase text-xs hover:bg-foreground/90"
        >
          Edit
        </button>

        <button
          onClick={handleDeleteClick}
          disabled={isDeleting}
          className="flex-1 py-2 rounded-2xl bg-secondary border border-border text-foreground/70 font-black uppercase text-xs hover:bg-secondary/80 hover:text-foreground"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
