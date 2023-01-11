export const Section = ({
  title,
  description,
  children,
}: {
  title?: string;
  description?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-2 py-8">
      {title && <h2 className="text-2xl">{title}</h2>}
      {description && <p className="text-neutral-500">{description}</p>}
      <div className="">{children}</div>
    </div>
  );
};
