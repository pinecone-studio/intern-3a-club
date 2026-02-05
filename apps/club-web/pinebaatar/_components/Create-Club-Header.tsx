export const HeaderSection = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <div className="mb-12 border-l-4 border-primary pl-6">
    <h1 className="text-5xl font-black uppercase tracking-tighter text-white italic">{title}</h1>
    <p className="text-white/40 text-lg mt-2 font-medium italic">{subtitle}</p>
  </div>
);