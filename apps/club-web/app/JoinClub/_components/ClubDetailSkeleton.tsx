
export const ClubDetailSkeleton = () => (
  <div className="flex-1 rounded-3xl p-6 lg:p-8 bg-white/5 border border-white/5 animate-pulse">
  
    <header className="mb-6">
      <div className="h-7 w-1/2 bg-white/10 rounded-md pt-2" />
    </header>

    <div className="flex items-center gap-4 px-3 py-2 rounded-2xl bg-white/[0.02] border border-white/5 mb-6">
      <div className="h-8 w-8 rounded-full bg-white/10 shrink-0" />
      <div className="space-y-2">
        <div className="h-2 w-20 bg-white/10 rounded" />
        <div className="h-3 w-32 bg-white/10 rounded" />
      </div>
    </div>

    <div className="mb-8 ml-3 border-l border-white/10 pl-2 space-y-2">
      <div className="h-3 w-full bg-white/10 rounded" />
      <div className="h-3 w-5/6 bg-white/10 rounded" />
      <div className="h-3 w-4/6 bg-white/10 rounded" />
    </div>

    <div className="grid grid-cols-2 gap-4 mb-8">
      <div className="h-16 bg-white/10 rounded-xl" />
      <div className="h-16 bg-white/10 rounded-xl" />
    </div>
    
    <div className="h-24 bg-white/10 rounded-xl mb-10" />

    <div className="mt-10 pt-6 border-t border-white/5">
      <div className="h-12 w-full bg-white/10 rounded-xl" />
    </div>
  </div>
);