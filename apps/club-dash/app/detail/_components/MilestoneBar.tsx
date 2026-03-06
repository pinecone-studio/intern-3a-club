type Props = {
  start: number;
  end: number;
};

export const MilestoneBar = ({ start, end }: Props) => {
  return (
    <div
      className="bg-blue-500 h-6 rounded-md flex items-center px-2 text-xs text-white"
      style={{
        gridColumn: `${start} / ${end}`,
      }}
    >
      Club
    </div>
  );
};
