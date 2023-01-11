import { handleTailwindClassOverrides } from "../utils/utils";

export const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={handleTailwindClassOverrides(
        "shadow-md rounded-theme p-12 w-full border-theme",
        className
      )}
    >
      {children}
    </div>
  );
};
