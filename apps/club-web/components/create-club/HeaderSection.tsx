export const HeaderSection = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => (
  <div className="mb-12">
    <h1 className="text-xl font-semibold text-white ">{title}</h1>
    <p className="text-white/50 text-xs">{subtitle}</p>
  </div>
);
