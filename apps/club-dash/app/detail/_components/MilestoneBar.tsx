export const MilestoneBar = ({ start, end }: any) => {
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
