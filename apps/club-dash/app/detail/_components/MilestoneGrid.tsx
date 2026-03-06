import { MilestoneRow } from './MilestoneRow';
import { GetAllClub } from '../../../libs/types';

type Props = {
  clubs: GetAllClub[];
};

export const MilestoneGrid = ({ clubs }: Props) => {
  return (
    <div className="rounded-xl border bg-card overflow-hidden">
      {clubs.map((club) => (
        <MilestoneRow key={club.id} club={club} />
      ))}
    </div>
  );
};
