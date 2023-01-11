export const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-base-100 border-b h-12 flex items-center p-4">
      {children}
    </div>
  );
};
