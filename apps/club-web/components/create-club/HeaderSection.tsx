export const HeaderSection = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => (
  <div className="mb-12">
    <h1 className="text-xl font-bold uppercase  text-white ">{title}</h1>
    <p className="text-white/40 text-lg mt-2  ">{subtitle}</p>
  </div>
);
