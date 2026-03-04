export const ClubListSkeleton = () => (
  <div className="w-full lg:w-[320px] flex flex-col">
    <div className="mb-6"/>

    <div className="flex flex-col gap-4">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="w-full p-4 rounded-xl border border-white/5 bg-white/10/20 animate-pulse"
        >
          <div className="flex justify-between items-start mb-2 gap-2">
            <div className="h-4 w-3/4 bg-white/10 rounded" />
            <div className="h-4 w-12 bg-white/10 rounded" />
          </div>

          <div className="flex flex-col gap-1 mt-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-white/10 rounded-full shrink-0" />
              <div className="h-2 w-1/2 bg-white/10 rounded" />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-white/10 rounded-full shrink-0" />
              <div className="h-2 w-1/3 bg-white/10 rounded" />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
