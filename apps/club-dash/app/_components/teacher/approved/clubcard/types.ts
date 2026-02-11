export interface Club {
  id: string;
  name: string;
  leader: string;
  time: string;
  room: string;
}

export interface ClubCardProps {
  req: Club;
  isPrimary: boolean;
  isExpanded: boolean;
  setExpandedId: (_id: string | null) => void;
  onDelete?: (_club: Club) => void;
}
