import { MilestoneRow } from './MilestoneRow';

type Props = {
  clubs: any[];
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
